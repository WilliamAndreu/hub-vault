import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Request } from "src/core/core-interface/request";
import { GetBucketUseCase } from "@usecases/bucket/get-bucket.usecase";
import { BucketRepository } from "@repositories/bucket/bucket.repository";
import { BucketRemoteDataSource } from "@data/datasource/bucket/source/bucket-remote-datasource";
import { BucketImpRepository } from "@data/repositories/bucket/bucket-implementation.repository";
import { BucketRemoteDataSourceImp } from "@data/datasource/bucket/remote/bucket-remote-datasource-imp";
import { BucketLocalDataSourceImp } from "@data/datasource/bucket/local/bucket-local-datasource-imp";
import { BucketLocalDataSource } from "@data/datasource/bucket/source/bucket-local-datasource";

import { GetContentUseCase } from "@usecases/content/get-content.usecase";
import { ContentRepository } from "@repositories/content/content.repository";
import { ContentRemoteDataSource } from "@data/datasource/content/source/content-remote-datasource";
import { ContentImpRepository } from "@data/repositories/content/content-implementation.repository";
import { ContentRemoteDataSourceImp } from "@data/datasource/content/remote/content-remote-datasource-imp";
import { ContentLocalDataSourceImp } from "@data/datasource/content/local/content-local-datasource-imp";
import { ContentLocalDataSource } from "@data/datasource/content/source/content-local-datasource";
import { UploadContentUseCase } from "@usecases/content/upload-content.usecase";
import { DeleteContentUseCase } from "@usecases/content/delete-content.usecase";

import { GetSessionUseCase } from "@usecases/session/get-session.usecase";
import { SessionRepository } from "@repositories/session/session.repository";
import { SessionRemoteDataSource } from "@data/datasource/session/source/session-remote-datasource";
import { SessionImpRepository } from "@data/repositories/session/session-implementation.repository";
import { SessionRemoteDataSourceImp } from "@data/datasource/session/remote/session-remote-datasource-imp";
import { SessionLocalDataSourceImp } from "@data/datasource/session/local/session-local-datasource-imp";
import { SessionLocalDataSource } from "@data/datasource/session/source/session-local-datasource";

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

    GetSessionUseCase,
    { provide: SessionRepository, useClass: SessionImpRepository },
    { provide: SessionRemoteDataSource, useClass: SessionRemoteDataSourceImp },
    { provide: SessionLocalDataSource, useClass: SessionLocalDataSourceImp },
  ],
  imports: [CommonModule, HttpClientModule],
})
export class DataModule {}
