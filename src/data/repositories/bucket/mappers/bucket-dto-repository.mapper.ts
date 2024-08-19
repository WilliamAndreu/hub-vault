import { Mapper } from 'src/core/core-interface/mapper';
import { BucketDTO } from '../../../datasource/bucket/remote/dto/bucket.dto';
import { BucketEntity } from '@models/bucket/bucket-entity';



export class BucketDtoRepositoryMapper extends Mapper<BucketEntity,BucketDTO> {
  override mapFrom(param: BucketEntity): BucketDTO {
    throw new Error('No need to convert to DTO');
  }



  mapTo(param: BucketDTO): BucketEntity {
    return {
      id: param.id,
      node_id: param.node_id,
      name: param.name,
      full_name: param.full_name,
      private: param.private,
      html_url: param.html_url,
      description: param.description,
      url: param.url,
      forks_url: param.forks_url,
      collaborators_url: param.collaborators_url,
      events_url: param.events_url,
      issues_url: param.issues_url,
      notifications_url: param.notifications_url,
      created_at: param.created_at,
      updated_at: param.updated_at,
      pushed_at: param.pushed_at,
      git_url: param.git_url,
      ssh_url: param.ssh_url,
      clone_url: param.clone_url,
      svn_url: param.svn_url,
      size: param.size,
      forks_count: param.forks_count,
      open_issues_count: param.open_issues_count,
      organization: param.organization ? {
        login: param.organization.login,
        id: param.organization.id,
        node_id: param.organization.node_id,
        avatar_url: param.organization.avatar_url,
        gravatar_id: param.organization.gravatar_id,
        url: param.organization.url,
        html_url: param.organization.html_url,
        followers_url: param.organization.followers_url,
        following_url: param.organization.following_url,
        gists_url: param.organization.gists_url,
        starred_url: param.organization.starred_url,
        subscriptions_url: param.organization.subscriptions_url,
        organizations_url: param.organization.organizations_url,
        repos_url: param.organization.repos_url,
        events_url: param.organization.events_url,
        received_events_url: param.organization.received_events_url,
        type: param.organization.type,
        site_admin: param.organization.site_admin
      }: undefined
    };
  }
  




  
  
}
