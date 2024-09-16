import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "fileSize",
})
export class FileSizePipe implements PipeTransform {
  transform(sizeInBytes: number): string {
    if (sizeInBytes == null || sizeInBytes < 0) {
      return "Invalid size";
    }

    const sizeInKB = sizeInBytes / 1024;
    const sizeInMB = sizeInKB / 1024;
    const sizeInGB = sizeInMB / 1024;
    const sizeInTB = sizeInGB / 1024;

    if (sizeInTB >= 1) {
      return `${sizeInTB.toFixed(2)} TB`;
    } else if (sizeInGB >= 1) {
      return `${sizeInGB.toFixed(2)} GB`;
    } else if (sizeInMB >= 1) {
      return `${sizeInMB.toFixed(2)} MB`;
    } else if (sizeInKB >= 1) {
      return `${sizeInKB.toFixed(2)} KB`;
    } else {
      return `${sizeInBytes.toFixed(0)} Bytes`;
    }
  }
}
