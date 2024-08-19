import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Request } from 'src/core/core-interface/request';
import {GetBucketUseCase} from "@usecases/bucket/get-bucket.usecase";
import {BucketRepository} from "@repositories/bucket/bucket.repository";
import {BucketRemoteDataSource} from "@data/datasource/bucket/source/bucket-remote-datasource";
import {BucketImpRepository} from "@data/repositories/bucket/bucket-implementation.repository";
import {BucketRemoteDataSourceImp} from "@data/datasource/bucket/remote/bucket-remote-datasource-imp";
import {BucketLocalDataSourceImp} from "@data/datasource/bucket/local/bucket-local-datasource-imp";
import {BucketLocalDataSource} from "@data/datasource/bucket/source/bucket-local-datasource";


import {GetContentUseCase} from "@usecases/content/get-content.usecase";
import {ContentRepository} from "@repositories/content/content.repository";
import {ContentRemoteDataSource} from "@data/datasource/content/source/content-remote-datasource";
import {ContentImpRepository} from "@data/repositories/content/content-implementation.repository";
import {ContentRemoteDataSourceImp} from "@data/datasource/content/remote/content-remote-datasource-imp";
import {ContentLocalDataSourceImp} from "@data/datasource/content/local/content-local-datasource-imp";
import {ContentLocalDataSource} from "@data/datasource/content/source/content-local-datasource";
import { UploadContentUseCase } from '@usecases/content/upload-content.usecase';
import { DeleteContentUseCase } from '@usecases/content/delete-content.usecase';

@NgModule({
  providers: [
    Request,


    GetBucketUseCase,
    { provide: BucketRepository, useClass: BucketImpRepository },
    { provide: BucketRemoteDataSource, useClass: BucketRemoteDataSourceImp },
    { provide: BucketLocalDataSource, useClass: BucketLocalDataSourceImp },

    GetContentUseCase,
    UploadContentUseCase,
    DeleteContentUseCase,
    { provide: ContentRepository, useClass: ContentImpRepository },
    { provide: ContentRemoteDataSource, useClass: ContentRemoteDataSourceImp },
    { provide: ContentLocalDataSource, useClass: ContentLocalDataSourceImp },
  ],
  imports: [CommonModule, HttpClientModule],
})
export class DataModule {}
