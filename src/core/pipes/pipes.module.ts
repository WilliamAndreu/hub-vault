import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FilterCharactersByNamePipe } from './filter-characters-by-name.pipe';
import { SecurePipe } from './auth-image.pipe';
import { FormatGitHubRepoName } from './git-hub-repo-name.pipe';

@NgModule({
  declarations: [
    //FilterCharactersByNamePipe, 
    SecurePipe,FormatGitHubRepoName ],
  imports: [CommonModule],
  exports: [
     //FilterCharactersByNamePipe,
     SecurePipe,FormatGitHubRepoName],
})
export class PipesModule {}
