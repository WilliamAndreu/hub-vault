import { Observable } from "rxjs";
import { UseCase } from "src/core/core-interface/use-case";
import { Injectable } from "@angular/core";
import { ContentEntity } from "@models/content/content.entity";
import { ContentRepository } from "../../repositories/content/content.repository";
import { ContentModifiedEntity } from "@models/content/content-modified.entity";

@Injectable()
export class UploadContentUseCase implements UseCase<{ fileBase64: string; path: string; fileName: string }, ContentModifiedEntity> {
  constructor(private contentRepository: ContentRepository) {}

  execute(params: { fileBase64: string; path: string; fileName: string }): Observable<ContentModifiedEntity> {
    return this.contentRepository.uploadContent(params);
  }
}
