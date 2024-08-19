import {Observable, map, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ContentDboRepositoryMapper } from './mappers/content/content-list-dbo-repository.mapper';
import { ContentDtoRepositoryMapper } from './mappers/content/content-list-dto-repository.mapper';
import { ContentRepository } from 'src/domain/repositories/content/content.repository';
import { ContentEntity } from '@models/content/content.entity';
import { ContentRemoteDataSource } from '../../datasource/content/source/content-remote-datasource';
import { ContentModifiedDtoRepositoryMapper } from './mappers/content-modified/content-modified-dto-repository.mapper';
import { ContentModifiedEntity } from '@models/content/content-modified.entity';

@Injectable()
export class ContentImpRepository extends ContentRepository {


  contentDboMapper = new ContentDboRepositoryMapper();
  contentDtoMapper = new ContentDtoRepositoryMapper();
  modifiedContetnDtoMapper = new ContentModifiedDtoRepositoryMapper();


  constructor(private contentRemoteDataSource: ContentRemoteDataSource) {
    super();
  }

  override getContent(params: string): Observable<ContentEntity[]> {
    
    return this.contentRemoteDataSource.getContent(params).pipe(
      map(this.contentDtoMapper.mapTo)
      ) 
    }
            
    override uploadContent(params: { fileBase64: string; path: string; fileName: string; }): Observable<ContentModifiedEntity> {
      return this.contentRemoteDataSource.uploadContent(params).pipe(
        map(this.modifiedContetnDtoMapper.mapTo)
      );
    }
    override deleteContent(params: {path: string; sha: string}): Observable<ContentModifiedEntity> {
      return this.contentRemoteDataSource.deleteContent(params).pipe(
        map(this.modifiedContetnDtoMapper.mapTo)
        ) 
    }

}
