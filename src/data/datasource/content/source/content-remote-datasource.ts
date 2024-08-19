import { Observable } from "rxjs";
import { ContentDTO } from "../remote/dto/content.dto";
import { ContentModifiedDTO } from "../remote/dto/content-modified.dto";
import { ContentModifiedEntity } from "@models/content/content-modified.entity";

export abstract class ContentRemoteDataSource {
    abstract getContent(params : string): Observable<ContentDTO[]>;
    abstract uploadContent(params : {fileBase64: string, path: string, fileName: string}): Observable<ContentModifiedDTO>;
    abstract deleteContent(params : {path: string; sha: string}): Observable<ContentModifiedDTO>;

}