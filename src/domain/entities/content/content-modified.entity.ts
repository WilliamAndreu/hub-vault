import { CommitEntity } from "./commit.entity"
import { ContentEntity } from "./content.entity"

export interface ContentModifiedEntity {
    content: ContentEntity
    commit: CommitEntity
  }