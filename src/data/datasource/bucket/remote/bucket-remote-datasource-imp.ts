import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from 'src/core/core-interface/request';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BucketRemoteDataSource } from '@data/datasource/bucket/source/bucket-remote-datasource';
import { BucketDTO } from '@data/datasource/bucket/remote/dto/bucket.dto';
import { environment } from '@environments/environment';

@Injectable()
export class BucketRemoteDataSourceImp extends BucketRemoteDataSource{

  constructor(public http: HttpClient) {
    super();
  }

  override getBucket(params: string): Observable<BucketDTO> {
    const path = environment.apiBaseUrl;
    const headers = new HttpHeaders()
    return this.http.get<BucketDTO>(path, { headers: headers });
  }


  }