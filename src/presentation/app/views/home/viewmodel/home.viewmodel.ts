import { Injectable } from '@angular/core';
import { GetBucketUseCase } from '@usecases/bucket/get-bucket.usecase';

@Injectable()
export class HomeViewModel {

  constructor(
    private getBucketUseCase: GetBucketUseCase
  ) {
    this.initViewModel();
  }

  initViewModel() {
    this.getBucket();
  }


  private getBucket(){
    this.getBucketUseCase.execute("").subscribe(value => {
      console.log(value)
    })
  }
}
