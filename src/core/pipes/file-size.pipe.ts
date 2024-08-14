import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(sizeInKB: number): string {
    const sizeInMB = sizeInKB / 1024;
    const sizeInGB = sizeInMB / 1024;

    if (sizeInGB >= 1) {
      return `${sizeInGB.toFixed(2)} GB`;
    } else if (sizeInMB >= 1) {
      return `${sizeInMB.toFixed(2)} MB`;
    } else {
      return `${sizeInKB.toFixed(2)} KB`;
    }
  }
}
