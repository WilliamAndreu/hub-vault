import { Injectable, Signal, signal } from '@angular/core';
import { GetBucketUseCase } from '@usecases/bucket/get-bucket.usecase';
import { BucketEntity } from '@models/bucket/bucket-entity';
import { GetContentUseCase } from '@usecases/content/get-content.usecase';
import { LocalStorageService } from 'src/core/services/local-storage.service';
import { ContentEntity } from '@models/content/content-entity';
import { Observable, catchError, of } from 'rxjs';
import { GithubRouterService } from 'src/core/services/git-hub-router.service';
import { GitHubFileDownloadService } from 'src/core/services/github-download-file.service';

@Injectable()
export class HomeViewModel {
  bucketData: Signal<BucketEntity | undefined> = signal(undefined);
  contentData: Signal<ContentEntity[] | undefined> = signal(undefined);
  error: Signal<string | undefined> = signal(undefined);

  constructor(
    private readonly getBucketUseCase: GetBucketUseCase,
    private readonly getContentUseCase: GetContentUseCase,
    private readonly localStorageService: LocalStorageService,
    private readonly gitHubRouter: GithubRouterService,
    private readonly gitHubFileDownloader: GitHubFileDownloadService
  ) {
    this.initializeViewModel();
  }


  public addRouteToGithubRouter(url: string) {
    this.gitHubRouter.processUrl(url);
  }

  public downloadFile(url:string , fileName: string) {
    this.gitHubFileDownloader.downloadFile(url, fileName).subscribe({
      next: () => {
        console.log('File downloaded successfully');
      },
      error: (error) => {
        console.error('Error downloading file:', error);
      } 
    });
  }

  private initializeViewModel(): void {
    this.loadBucketData();
    this.verifyLocalDirectory();
    this.initGitHubRouterObserver();
  
  }

  private loadBucketData(): void {
    this.getBucketUseCase.execute("").pipe(
      catchError(err => {
        this.handleError('Failed to load bucket data', err);
        return of(undefined); // Return a default value or empty observable
      })
    ).subscribe({
      next: (bucket) => {
        this.bucketData = signal(bucket);
        console.log(this.bucketData());
      }
    });
  }

  private verifyLocalDirectory(): void {
    this.localStorageService.getMainDirectoryObservable().subscribe({
      next: (directory) => {
        this.gitHubRouter.resetRoutes();
        this.loadContentData(directory?.directoryPath || '')
      },
      error: (err) => this.handleError('Error retrieving directory', err)
    });
  }

  private loadContentData(directoryPath: string): void {
    this.getContentUseCase.execute(directoryPath).pipe(
      catchError(err => {
        this.handleError('Failed to load content data', err);
        return of([]); // Return a default value or empty observable
      })
    ).subscribe({
      next: (content) => {
        this.contentData = signal(content);
        console.log(this.contentData());
      }
    });
  }

  private handleError(message: string, error: any): void {
    console.error(message, error);
    this.error = signal(message);
  }
  private initGitHubRouterObserver() {
    this.gitHubRouter.routes$.subscribe(url => {
      console.log(this.gitHubRouter.getCurrentPath())
      this.loadContentData(this.gitHubRouter.getCurrentPath());
    });
  }


}
