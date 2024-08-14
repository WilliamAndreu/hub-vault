import { Observable } from "rxjs";
import { ContentDTO } from "../remote/dto/content.dto";

export abstract class ContentRemoteDataSource {
    abstract getContent(params : string): Observable<ContentDTO[]>;
    abstract uploadContent(params : {file: string, path: string}): Observable<any>;
}