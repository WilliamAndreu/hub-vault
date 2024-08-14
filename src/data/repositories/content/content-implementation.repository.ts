import {Observable, map, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ContentDboRepositoryMapper } from './mappers/content-dbo-repository.mapper';
import { ContentDtoRepositoryMapper } from './mappers/content-dto-repository.mapper';
import { ContentRepository } from 'src/domain/repositories/content/content.repository';
import { ContentEntity } from '@models/content/content-entity';
import { ContentRemoteDataSource } from '../../datasource/content/source/content-remote-datasource';
import { ContentLocalDataSource } from '../../datasource/content/source/content-local-datasource';

@Injectable()
export class ContentImpRepository extends ContentRepository {


  contentDboMapper = new ContentDboRepositoryMapper();
  contentDtoMapper = new ContentDtoRepositoryMapper();


  constructor(private contentRemoteDataSource: ContentRemoteDataSource) {
    super();
  }

  override getContent(params: string): Observable<ContentEntity[]> {
    
    return this.contentRemoteDataSource.getContent(params).pipe(
      map(this.contentDtoMapper.mapTo)
      ) 
    }
    
  override uploadContent(params: { file: string; path: string; }): Observable<any> {
    throw new Error('Method not implemented.');
  }


}
