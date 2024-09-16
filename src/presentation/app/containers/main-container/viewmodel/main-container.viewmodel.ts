import { Injectable, Signal, inject, signal } from "@angular/core";
import { MainDirectoryInterface } from "src/core/public-interface/main-directory-interface";
import { toSignal } from "@angular/core/rxjs-interop";
import { environment } from "@environments/environment";
import { LoaderService } from "src/core/services/loader.service";
import { DirectoryStorageService } from "src/core/services/directory-storage.service";

@Injectable()
export class MainContainerViewModel {
  isLoading = signal(false);
  selectedTech: Signal<MainDirectoryInterface | undefined>;
  mainDirectoriesList: MainDirectoryInterface[] = environment.mainDirectories;
  private loaderService = inject(LoaderService);
  constructor(private directorySorageService: DirectoryStorageService) {
    this.selectedTech = toSignal(this.directorySorageService.getMainDirectoryObservable());
    this.observeLoader();
  }

  public saveMainDirectorySelection(mainDirectory: MainDirectoryInterface) {
    this.directorySorageService.setMainDirectory(mainDirectory);
  }

  public showLoader() {
    this.loaderService.showLoader();
  }
  public hideLoader() {
    this.loaderService.hideLoader();
  }
  public observeLoader() {
    return this.loaderService.loaderState.subscribe({
      next: (res) => {
        this.isLoading.set(res);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
