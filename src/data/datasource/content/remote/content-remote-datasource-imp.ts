import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Request } from "src/core/core-interface/request";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { ContentRemoteDataSource } from "@data/datasource/content/source/content-remote-datasource";
import { ContentDTO } from "@data/datasource/content/remote/dto/content.dto";
import { environment } from "@environments/environment";
import { ContentModifiedDTO } from "./dto/content-modified.dto";

@Injectable()
export class ContentRemoteDataSourceImp extends ContentRemoteDataSource {
  constructor(public http: HttpClient) {
    super();
  }

  override getContent(params: string): Observable<ContentDTO[]> {
    let path = environment.apiBaseUrl + `/contents/${environment.mainDirectories[0].directoryPath}`;
    if (params.length > 0) {
      path = environment.apiBaseUrl + `/contents/${params}`;
    }
    const paramsData = new HttpParams().set("cacheBuster", Date.now().toString());
    let headers = new HttpHeaders({ Authorization: "Bearer " + environment.gitHubToken }).append(
      "content-type",
      "application/vnd.github.raw+json"
    );
    return this.http.get<ContentDTO[]>(path, { headers: headers, params: paramsData });
  }

  override uploadContent(params: { fileBase64: string; path: string; fileName: string }): Observable<ContentModifiedDTO> {
    const path = environment.apiBaseUrl + `/contents/${params.path}/${params.fileName}`;
    const headers = new HttpHeaders({ Authorization: "Bearer " + environment.gitHubToken });
    const body = {
      message: "Aded file" + params.fileName + "to" + params.path,
      content: params.fileBase64,
    };
    return this.http.put<ContentModifiedDTO>(path, body, { headers: headers });
  }

  override deleteContent(params: { path: string; sha: string }): Observable<ContentModifiedDTO> {
    let path = environment.apiBaseUrl + `/contents/${environment.mainDirectories[0].directoryPath}`;
    if (params.path.length > 0) {
      path = environment.apiBaseUrl + `/contents/${params.path}`;
    }
    const paramsData ={
      message: "Deleted file at " + params.path,
      path: params.path,
      sha: params.sha
    };
    let headers = new HttpHeaders({ Authorization: "Bearer " + environment.gitHubToken }).append(
      "content-type",
      "application/vnd.github.raw+json"
    );
    return this.http.delete<ContentModifiedDTO>(path, { headers: headers, body: paramsData });
  }
}
