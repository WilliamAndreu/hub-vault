import { Observable } from "rxjs";
import { ContentEntity } from "@models/content/content-entity";

export abstract class ContentRepository {
  abstract getContent(params: string): Observable<ContentEntity[]>;
  abstract uploadContent(params: {
    file: string;
    path: string;
  }): Observable<any>;
}
