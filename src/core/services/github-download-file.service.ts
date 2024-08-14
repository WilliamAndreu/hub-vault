import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitHubFileDownloadService {
    protected http: HttpClient = this.injector.get(HttpClient);

  constructor(protected injector: Injector) { }

  downloadFile(url: string, fileName: string): Observable<void> {
    return this.http.get(url, { responseType: 'blob' }).pipe(
      map((blob: Blob) => {
        const a = document.createElement('a');
        const objectUrl = URL.createObjectURL(blob);
        a.href = objectUrl;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(objectUrl);
      })
    );
  }
}
