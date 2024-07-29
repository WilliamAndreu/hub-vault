import {Observable, map, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { BucketDboRepositoryMapper } from './mappers/bucket-dbo-repository.mapper';
import { BucketDtoRepositoryMapper } from './mappers/bucket-dto-repository.mapper';
import { BucketRepository } from 'src/domain/repositories/bucket/bucket.repository';
import { BucketEntity } from '@models/bucket/bucket-entity';
import { BucketRemoteDataSource } from '../../datasource/bucket/source/bucket-remote-datasource';
import { BucketLocalDataSource } from '../../datasource/bucket/source/bucket-local-datasource';

@Injectable()
export class BucketImpRepository extends BucketRepository {


  bucketDboMapper = new BucketDboRepositoryMapper();
  bucketDtoMapper = new BucketDtoRepositoryMapper();


  constructor(private bucketRemoteDataSource: BucketRemoteDataSource, private bucketLocalDataSource: BucketLocalDataSource) {
    super();
  }

  override getBucket(params: string): Observable<BucketEntity> {
    

  const localData = localStorage.getItem("bucket");
  if (localData == null) {
     return this.bucketRemoteDataSource.getBucket(params).pipe(
        map(this.bucketDtoMapper.mapTo),
        map(value => {
            localStorage.setItem("bucket", JSON.stringify(value));
            return value;
        })
        ) 
  }
     return of(this.bucketDboMapper.mapTo(this.bucketLocalDataSource.getBucket(params))); 

  }

}
