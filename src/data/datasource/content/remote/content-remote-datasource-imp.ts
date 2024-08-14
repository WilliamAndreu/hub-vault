import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from 'src/core/core-interface/request';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContentRemoteDataSource } from '@data/datasource/content/source/content-remote-datasource';
import { ContentDTO } from '@data/datasource/content/remote/dto/content.dto';
import { environment } from '@environments/environment';

@Injectable()
export class ContentRemoteDataSourceImp extends ContentRemoteDataSource{

  constructor(public http: HttpClient) {
    super();
  }

  override getContent(params: string): Observable<ContentDTO[]> {
    let  path = environment.apiBaseUrl + `/contents/${environment.mainDirectories[0].directoryPath}`;
    if(params.length > 0){
      path = environment.apiBaseUrl + `/contents/${params}`;
    }
    console.log(path);
    const headers = new HttpHeaders()
    return this.http.get<ContentDTO[]>(path, { headers: headers });
  }

  override uploadContent(params: { file: string; path: string; }): Observable<any> {
    throw new Error('Method not implemented.');
  }


  }