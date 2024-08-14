import { Injectable } from '@angular/core';
import { ContentLocalDataSource } from '@data/datasource/content/source/content-local-datasource';
import { ContentDBO } from '../local/dbo/content.dbo';

@Injectable()
export class ContentLocalDataSourceImp extends ContentLocalDataSource{

  constructor() {
    super();
  }

  override getContent(params: string): ContentDBO[] {
    const contentFromLocalStorage = JSON.parse(localStorage.getItem("content")!) as ContentDBO[];
    return contentFromLocalStorage;
}


  }
