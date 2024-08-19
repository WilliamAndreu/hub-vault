import { Mapper } from 'src/core/core-interface/mapper';
import { ContentDTO } from '../../../../datasource/content/remote/dto/content.dto';
import { ContentEntity } from '@models/content/content.entity';

export class ContentDtoRepositoryMapper extends Mapper<ContentEntity[],ContentDTO[]> {

  mapTo(params: ContentDTO[]): ContentEntity[] {
    return params.map(param => ({
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

  mapFrom(params: ContentEntity[]): ContentDTO[] {
    return params.map(param => ({
      name: param.name,
      path: param.path,
      sha: param.sha,
      size: param.size,
      url: param.url,
      html_url: param.html_url,
      git_url: param.git_url,
      download_url: param.download_url,
      type: param.type,
      _links: {
        self: param.url, // Mapeamos self a partir de url
        git: param.git_url,
        html: param.html_url,
      },
    }));
  }
}
