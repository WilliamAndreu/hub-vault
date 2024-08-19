import { Mapper } from 'src/core/core-interface/mapper';
import { ContentDTO } from '../../../../datasource/content/remote/dto/content.dto';
import { ContentEntity } from '@models/content/content.entity';
import { ContentModifiedEntity } from '@models/content/content-modified.entity';
import { ContentModifiedDTO } from '@data/datasource/content/remote/dto/content-modified.dto';

export class ContentModifiedDtoRepositoryMapper extends Mapper<ContentModifiedEntity,ContentModifiedDTO> {

  mapTo(params: ContentModifiedDTO): ContentModifiedEntity {
    return {
      content: params.content,
      commit: params.commit,
    }
  }

  mapFrom(params: ContentModifiedEntity): ContentModifiedDTO {
    return {
      content: {
        name: params.content.name,
        path: params.content.path,
        sha: params.content.sha,
        size: params.content.size,
        url: params.content.url,
        html_url: params.content.html_url,
        git_url: params.content.git_url,
        download_url: params.content.download_url,
        type: params.content.type,
        _links: {
          self: '',
          git: '',
          html: '',
        },
      },
      commit: params.commit,
    }
  }
}
