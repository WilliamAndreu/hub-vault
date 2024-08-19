import { CommitDTO } from "./commit.dto"
import { ContentDTO } from "./content.dto"

export interface ContentModifiedDTO {
    content: ContentDTO
    commit: CommitDTO
  }