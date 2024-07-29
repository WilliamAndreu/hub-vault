import { Observable } from 'rxjs';
import { BucketEntity } from '@models/bucket/bucket-entity';

export abstract class BucketRepository {
  abstract getBucket(params : string): Observable<BucketEntity>;
}
