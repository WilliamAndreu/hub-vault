import {Observable, map, of } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { BucketDboRepositoryMapper } from './mappers/bucket-dbo-repository.mapper';
import { BucketDtoRepositoryMapper } from './mappers/bucket-dto-repository.mapper';
import { BucketRepository } from 'src/domain/repositories/bucket/bucket.repository';
import { BucketEntity } from '@models/bucket/bucket-entity';
import { BucketRemoteDataSource } from '../../datasource/bucket/source/bucket-remote-datasource';
import { BucketLocalDataSource } from '../../datasource/bucket/source/bucket-local-datasource';
import { CryptoService } from 'src/core/services/cryto-service.service';

@Injectable()
export class BucketImpRepository extends BucketRepository {


  bucketDboMapper = new BucketDboRepositoryMapper();
  bucketDtoMapper = new BucketDtoRepositoryMapper();
  private crypto = inject(CryptoService);


  constructor(private bucketRemoteDataSource: BucketRemoteDataSource, private bucketLocalDataSource: BucketLocalDataSource) {
    super();
  }

  override getBucket(params: string): Observable<BucketEntity> {
    

  const localData = localStorage.getItem("BK");
  if (localData == null) {
     return this.bucketRemoteDataSource.getBucket(params).pipe(
        map(this.bucketDtoMapper.mapTo),
        map(value => {
          const encryptedValue = this.crypto.encryptData(JSON.stringify(value))
            localStorage.setItem("BK", encryptedValue);
            return value;
        })
        ) 
  }
     return of(this.bucketDboMapper.mapTo(this.bucketLocalDataSource.getBucket(params))); 

  }

}
