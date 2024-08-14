import { Injectable, Signal, signal} from '@angular/core';
import { MainDirectoryInterface } from 'src/core/public-interface/main-directory-interface';
import { LocalStorageService } from 'src/core/services/local-storage.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { environment } from '@environments/environment';


@Injectable()
export class MainContainerViewModel {
  selectedTech: Signal<MainDirectoryInterface | undefined> ;
  mainDirectoriesList: MainDirectoryInterface[] = environment.mainDirectories;


  constructor(private localSorageService: LocalStorageService) {
  this.selectedTech = toSignal(this.localSorageService.getMainDirectoryObservable())
  }



  public saveMainDirectorySelection(mainDirectory: MainDirectoryInterface){
    this.localSorageService.setMainDirectory(mainDirectory)
  }


 
}
