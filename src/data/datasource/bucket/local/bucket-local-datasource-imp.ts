import { Injectable, inject } from '@angular/core';
import { BucketLocalDataSource } from '@data/datasource/bucket/source/bucket-local-datasource';
import { BucketDBO } from '../local/dbo/bucket.dbo';
import * as CryptoJS from "crypto-js";
import { environment } from '@environments/environment';
import { CryptoService } from 'src/core/services/cryto-service.service';

@Injectable()
export class BucketLocalDataSourceImp extends BucketLocalDataSource{
  private crypto = inject(CryptoService);

  constructor() {
    super();
  }

  override getBucket(params: string): BucketDBO {
    const bucketFromLocalStorage = localStorage.getItem("BK")!;
    const decryptValue = JSON.parse(this.crypto.decryptData(bucketFromLocalStorage)) ;
    return decryptValue as BucketDBO;
  }

  }
