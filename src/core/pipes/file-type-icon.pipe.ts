import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileIcon'
})
export class FileIconPipe implements PipeTransform {

  private readonly iconMapping: { [key: string]: string } = {
    'dir': 'folder',
    'default': 'description'
  };

  transform(fileType: string): string {
    return this.iconMapping[fileType] || this.iconMapping['default'];
  }

}
