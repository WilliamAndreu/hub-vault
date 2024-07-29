import { Observable } from "rxjs";
import { BucketDTO } from "../remote/dto/bucket.dto";

export abstract class BucketRemoteDataSource {
    abstract getBucket(params : string): Observable<BucketDTO>;
}