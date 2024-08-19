
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckObjectUtil } from './check-empty-object.util';
import { FileTypeDetectorUtil } from './file-type-detector.util';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports:[],
    providers: [CheckObjectUtil, FileTypeDetectorUtil]
})
export class UtilsModule {}
