
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatGitHubRepoName'
})
export
 class FormatGitHubRepoName implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    // Reemplaza guiones y guiones bajos por espacios
    const words = value.replace(/[-_]/g, ' ').split(' ');

    // Capitaliza la primera letra de cada palabra
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // Une las palabras con espacios
    return capitalizedWords.join(' ');
  }
}
