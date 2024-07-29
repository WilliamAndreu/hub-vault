import { Observable } from "rxjs";
import { BucketDBO } from "../local/dbo/bucket.dbo";

export abstract class BucketLocalDataSource {
    abstract getBucket(params: string): BucketDBO ;
}