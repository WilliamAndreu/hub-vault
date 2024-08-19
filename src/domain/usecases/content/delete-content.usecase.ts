import { Observable } from "rxjs";
import { UseCase } from "src/core/core-interface/use-case";
import { Injectable } from "@angular/core";
import { ContentEntity } from "@models/content/content.entity";
import { ContentRepository } from "../../repositories/content/content.repository";
import { ContentModifiedEntity } from "@models/content/content-modified.entity";

@Injectable()
export class DeleteContentUseCase implements UseCase<{ path: string; sha: string }, ContentModifiedEntity> {
  constructor(private contentRepository: ContentRepository) {}

  execute(params: { path: string; sha: string }): Observable<ContentModifiedEntity> {
    return this.contentRepository.deleteContent(params);
  }
}
