import { Observable } from 'rxjs';
import { UseCase } from 'src/core/core-interface/use-case';
import { Injectable } from '@angular/core';
import { ContentEntity } from '@models/content/content-entity';
import { ContentRepository } from '../../repositories/content/content.repository';

@Injectable()
export class GetContentUseCase
  implements UseCase<string, ContentEntity[]>
{
  constructor(private contentRepository: ContentRepository) {}

  execute(params: string): Observable<ContentEntity[]> {
    return this.contentRepository.getContent(params)
  }
}
