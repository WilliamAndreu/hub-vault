import { Observable } from "rxjs";
import { UseCase } from "src/core/core-interface/use-case";
import { Injectable } from "@angular/core";
import { BucketEntity } from "@models/bucket/bucket-entity";
import { BucketRepository } from "../../repositories/bucket/bucket.repository";

@Injectable()
export class GetBucketUseCase implements UseCase<string, BucketEntity> {
  constructor(private bucketRepository: BucketRepository) {}

  execute(params: string): Observable<BucketEntity> {
    return this.bucketRepository.getBucket(params);
  }
}
