import { Mapper } from 'src/core/core-interface/mapper';
import { ContentDBO } from '@data/datasource/content/local/dbo/content.dbo';
import { ContentEntity } from '@models/content/content-entity';

export class ContentDboRepositoryMapper extends Mapper<ContentDBO[], ContentEntity[]> {

  // Método que mapea un array de ContentDBO a ContentEntity
  mapTo(params: ContentDBO[]): ContentEntity[] {
    return params.map((param) => ({
      name: param.name,
      path: param.path,
      sha: param.sha,
      size: param.size,
      url: param.url,
      html_url: param.html_url,
      git_url: param.git_url,
      download_url: param.download_url,
      type: param.type,
    }));
  }

  // Método que mapea un array de ContentEntity a ContentDBO
  mapFrom(params: ContentEntity[]): ContentDBO[] {
    return params.map((param) => ({
      name: param.name,
      path: param.path,
      sha: param.sha,
      size: param.size,
      url: param.url,
      html_url: param.html_url,
      git_url: param.git_url,
      download_url: param.download_url,
      type: param.type,
    }));
  }
}
