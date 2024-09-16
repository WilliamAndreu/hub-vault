import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FilterCharactersByNamePipe } from './filter-characters-by-name.pipe';
import { SecurePipe } from './auth-image.pipe';
import { FormatGitHubRepoName } from './git-hub-repo-name.pipe';
import { FileSizePipe } from './file-size.pipe';
import { FileIconPipe } from './file-type-icon.pipe';

@NgModule({
  declarations: [SecurePipe,FormatGitHubRepoName, FileSizePipe, FileIconPipe],
  imports: [CommonModule],
  exports: [
  
     SecurePipe,FormatGitHubRepoName, FileSizePipe, FileIconPipe],
})
export class PipesModule {}
