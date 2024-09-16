import {Observable, map, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { SessionRepository } from 'src/domain/repositories/session/session.repository';
import { SessionEntity } from '@models/session/session-entity';
import { SessionRemoteDataSource } from '@data/datasource/session/source/session-remote-datasource';
import { SessionDtoRepositoryMapper } from './mappers/session-dto-repository.mapper';

@Injectable()
export class SessionImpRepository extends SessionRepository {
  sessionDtoMapper = new SessionDtoRepositoryMapper();

  constructor(private sessionRemoteDataSource: SessionRemoteDataSource) {
    super();
  }

  override getSession(params: { email: string; password: string }): Observable<SessionEntity> {
    return this.sessionRemoteDataSource.getSession(params).pipe(
      map((res) => {
        return this.sessionDtoMapper.mapTo(res);
      })
    );
  }
}
