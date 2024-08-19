export interface BucketDBO {
  id: number
  node_id: string
  name: string
  full_name: string
  private: boolean
  html_url: string
  description: string
  url: string
  forks_url: string
  collaborators_url: string
  events_url: string
  issues_url: string
  notifications_url: string
  created_at: string
  updated_at: string
  pushed_at: string
  git_url: string
  ssh_url: string
  clone_url: string
  svn_url: string
  size: number
  forks_count: number
  open_issues_count: number
  organization?: OrganizationDBO

}



export interface OrganizationDBO {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}
