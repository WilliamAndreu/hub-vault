import { Observable } from "rxjs";
import { ContentEntity } from "@models/content/content.entity";
import { ContentModifiedEntity } from "@models/content/content-modified.entity";

export abstract class ContentRepository {
  abstract getContent(params: string): Observable<ContentEntity[]>;
  abstract uploadContent(params: { fileBase64: string; path: string; fileName: string }): Observable<ContentModifiedEntity>;
  abstract deleteContent(params : {path: string; sha: string}): Observable<ContentModifiedEntity>;
}
