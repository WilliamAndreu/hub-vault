export interface CommitEntity {
    sha: string
    node_id: string
    url: string
    html_url: string
    author: AuthorDTO
    committer: CommitterDTO
    tree: TreeDTO
    message: string
    parents: ParentDTO[]
    verification: VerificationDTO
  }
  
  export interface AuthorDTO {
    name: string
    email: string
    date: string
  }
  
  export interface CommitterDTO {
    name: string
    email: string
    date: string
  }
  
  export interface TreeDTO {
    sha: string
    url: string
  }
  
  export interface ParentDTO {
    sha: string
    url: string
    html_url: string
  }
  
  export interface VerificationDTO {
    verified: boolean
    reason: string
    signature: any
    payload: any
  }