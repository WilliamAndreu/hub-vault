import { Injectable, Signal, signal } from '@angular/core';
import { GetBucketUseCase } from '@usecases/bucket/get-bucket.usecase';
import { toSignal } from '@angular/core/rxjs-interop';
import { BucketEntity } from '@models/bucket/bucket-entity';

@Injectable()
export class HomeViewModel {
  bucketData: Signal<BucketEntity | undefined> = signal(undefined);



  constructor(
    private getBucketUseCase: GetBucketUseCase
  ) {
    this.initViewModel();
  }

  initViewModel() {
    this.getBucket();
  }

  private getBucket(){
    this.bucketData = toSignal(this.getBucketUseCase.execute(""))
    console.log(this.bucketData())
  }
}
