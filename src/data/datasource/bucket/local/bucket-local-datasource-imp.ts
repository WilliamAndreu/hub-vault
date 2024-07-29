import { Injectable } from '@angular/core';
import { BucketLocalDataSource } from '@data/datasource/bucket/source/bucket-local-datasource';
import { BucketDBO } from '../local/dbo/bucket.dbo';

@Injectable()
export class BucketLocalDataSourceImp extends BucketLocalDataSource{

  constructor() {
    super();
  }

  override getBucket(params: string): BucketDBO {
    const bucketFromLocalStorage = JSON.parse(localStorage.getItem("bucket")!) as BucketDBO;
    return bucketFromLocalStorage;
}


  }
