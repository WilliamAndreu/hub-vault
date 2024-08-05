import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumb: string[] = [];

  addFolder(folderName: string): void {
    this.breadcrumb.push(folderName);
  }

  navigateToFolder(index: number): void {
    if (index >= 0 && index < this.breadcrumb.length) {
      this.breadcrumb = this.breadcrumb.slice(0, index + 1);
    }
  }

  getBreadcrumb(): string[] {
    return [...this.breadcrumb];
  }

  getCurrentPath(): string {
    return this.breadcrumb.join('/');
  }
}
