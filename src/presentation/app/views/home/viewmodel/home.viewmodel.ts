import { Injectable, Signal, inject, signal } from "@angular/core";
import { GetBucketUseCase } from "@usecases/bucket/get-bucket.usecase";
import { BucketEntity } from "@models/bucket/bucket-entity";
import { GetContentUseCase } from "@usecases/content/get-content.usecase";
import { ContentEntity } from "@models/content/content.entity";
import { catchError, of } from "rxjs";
import { GithubRouterService } from "src/core/services/git-hub-router.service";
import { GitHubFileDownloadService } from "src/core/services/github-download-file.service";
import { UploadContentUseCase } from "@usecases/content/upload-content.usecase";
import { DeleteContentUseCase } from "@usecases/content/delete-content.usecase";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { FilePreviewComponent } from "src/presentation/app/shared-components/file-preview-component/file-preview.component";
import { LoaderService } from "src/core/services/loader.service";
import { DirectoryStorageService } from "src/core/services/directory-storage.service";
import { NoopScrollStrategy } from "@angular/cdk/overlay";

@Injectable()
export class HomeViewModel {
  bucketData: Signal<BucketEntity | undefined> = signal(undefined);
  contentData: Signal<ContentEntity[] | undefined> = signal(undefined);
  error: Signal<string | undefined> = signal(undefined);
  private loaderService = inject(LoaderService);
  private bottomSheet = inject(MatBottomSheet);

  constructor(
    private readonly getBucketUseCase: GetBucketUseCase,
    private readonly getContentUseCase: GetContentUseCase,
    private readonly deleteContentUseCase: DeleteContentUseCase,
    private readonly uploadContentUseCase: UploadContentUseCase,
    private readonly directoryStorageService: DirectoryStorageService,
    private readonly gitHubRouter: GithubRouterService,
    private readonly gitHubFileDownloader: GitHubFileDownloadService
  ) {
    this.initializeViewModel();
  }

  private initializeViewModel(): void {
    this.loaderService.showLoader();
    this.loadBucketData();
    this.verifyLocalDirectory();
    this.initGitHubRouterObserver();
  }

  public addRouteToGithubRouter(url: string) {
    this.gitHubRouter.processUrl(url);
  }

  public downloadFile(url: string, fileName: string) {
    this.gitHubFileDownloader.downloadFile(url, fileName).subscribe({
      next: () => {},
      error: (error) => {},
    });
  }

  public deleteFile(file: ContentEntity) {
    this.loaderService.showLoader();
    this.deleteContentUseCase.execute({ path: file.path, sha: file.sha }).subscribe({
      next: (content) => {
        this.loadContentData(this.gitHubRouter.getCurrentPath());
      },
      error: (error) => {},
    });
  }

  async initUploadContent(files: File[]) {
    this.loaderService.showLoader();
    
    try {
      // Iterar sobre cada archivo de manera secuencial
      for (const file of files) {
        const base64Data = await this.convertFileToBase64(file);
        
        // Esperar a que termine la subida de cada archivo antes de continuar
        await this.uploadContentUseCase
          .execute({
            fileBase64: base64Data as string,
            path: this.gitHubRouter.getCurrentPath(),
            fileName: file.name,
          })
          .toPromise(); // Convertir el observable a promesa
      }
  
      // Cargar el contenido después de que todos los archivos se hayan subido
      this.loadContentData(this.gitHubRouter.getCurrentPath());
    } catch (error) {
      console.error('Error al subir los archivos:', error);
    } finally {
      this.loaderService.hideLoader();
    }
  }
  
  

  private async convertFileToBase64(file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let base64Data = reader.result as string;
        base64Data = base64Data.replace(/^data:.*;base64,/, "");
        resolve(base64Data);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  }

  private loadBucketData(): void {
    this.getBucketUseCase
      .execute("")
      .pipe(
        catchError((err) => {
          this.handleError("Failed to load bucket data", err);
          return of(undefined);
        })
      )
      .subscribe({
        next: (bucket) => {
          this.bucketData = signal(bucket);
        },
      });
  }

  private verifyLocalDirectory(): void {
    this.directoryStorageService.getMainDirectoryObservable().subscribe({
      next: (directory) => {
        this.gitHubRouter.resetRoutes();
        this.loadContentData(directory?.directoryPath || "");
        setTimeout(() => {
          this.loaderService.hideLoader();
        }, 1000);
      },
      error: (err) => {
        this.loaderService.hideLoader();
        this.handleError("Error retrieving directory", err);
      },
    });
  }

  private loadContentData(directoryPath: string): void {
    this.getContentUseCase
      .execute(directoryPath)
      .pipe(
        catchError((err) => {
          this.handleError("Failed to load content data", err);
          return of([]);
        })
      )
      .subscribe({
        next: (content) => {
          this.contentData = signal(content);
          this.loaderService.hideLoader();
        },
      });
  }

  private handleError(message: string, error: any): void {
    console.error(message, error);
    this.error = signal(message);
  }
  private initGitHubRouterObserver() {
    this.gitHubRouter.routes$.subscribe((url) => {
      this.loadContentData(this.gitHubRouter.getCurrentPath());
    });
  }
  
  public openBottomSheet(content: ContentEntity) {
    this.bottomSheet.open(FilePreviewComponent, {
      data: content,
    });
  }
}
