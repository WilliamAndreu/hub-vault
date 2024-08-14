
import {ChangeDetectorRef, Component } from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";
import { environment } from '@environments/environment';
import { MainContainerViewModel } from '../viewmodel/main-container.viewmodel';
import { MainDirectoryInterface } from 'src/core/public-interface/main-directory-interface';

@Component({
    templateUrl:'./main-container.component.html',
    standalone: false,
    styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {
    mobileQuery: MediaQueryList;  
    private _mobileQueryListener: () => void;
    list = environment.mainDirectories;
  
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
      public viewModel: MainContainerViewModel) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
    }
  
    ngOnDestroy(): void {
      this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    public selectTech(techSelection: {}){
      const mainDirectorySelected = techSelection as MainDirectoryInterface;
      this.viewModel.saveMainDirectorySelection(mainDirectorySelected)
    }
  
    isDirectorySelected(directoryName: string): any {
      return this.viewModel.selectedTech()?.directoryName === directoryName
    }

  
 }
