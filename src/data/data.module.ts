import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CharactersRepository } from '@repositories/characters/characters.repository';
import { CharactersImpRepository } from './repositories/character/characters-implementation.repository';
import { GetHasNextAndCharactersUseCase } from '@usecases/characters/get-hasnext-and-characters.usecase';
import { CharactersRemoteDataSource } from './datasource/characters/source/characters-remote-datasource';
import { CharactersRemoteDataSourceImp } from './datasource/characters/remote/characters-remote-datasource-imp';
import { Request } from 'src/core/core-interface/request';
import { CharactersLocalDataSource } from './datasource/characters/source/characters-local-datasource';
import { CharactersLocalDataSourceImp } from './datasource/characters/local/characters-remote-datasource-imp';
import {GetBucketUseCase} from "@usecases/bucket/get-bucket.usecase";
import {BucketRepository} from "@repositories/bucket/bucket.repository";
import {BucketRemoteDataSource} from "@data/datasource/bucket/source/bucket-remote-datasource";
import {BucketImpRepository} from "@data/repositories/bucket/bucket-implementation.repository";
import {BucketRemoteDataSourceImp} from "@data/datasource/bucket/remote/bucket-remote-datasource-imp";
import {BucketLocalDataSourceImp} from "@data/datasource/bucket/local/bucket-local-datasource-imp";
import {BucketLocalDataSource} from "@data/datasource/bucket/source/bucket-local-datasource";


@NgModule({
  providers: [
    Request,
    GetHasNextAndCharactersUseCase,
    { provide: CharactersRepository, useClass: CharactersImpRepository },
    { provide: CharactersRemoteDataSource, useClass: CharactersRemoteDataSourceImp },
    { provide: CharactersLocalDataSource, useClass: CharactersLocalDataSourceImp },


    GetBucketUseCase,
    { provide: BucketRepository, useClass: BucketImpRepository },
    { provide: BucketRemoteDataSource, useClass: BucketRemoteDataSourceImp },
    { provide: BucketLocalDataSource, useClass: BucketLocalDataSourceImp },
  ],
  imports: [CommonModule, HttpClientModule],
})
export class DataModule {}
