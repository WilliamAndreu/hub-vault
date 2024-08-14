import { Observable } from "rxjs";
import { ContentDBO } from "../local/dbo/content.dbo";

export abstract class ContentLocalDataSource {
    abstract getContent(params: string): ContentDBO[] ;
}