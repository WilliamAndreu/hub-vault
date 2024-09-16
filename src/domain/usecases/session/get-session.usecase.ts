import { Observable } from 'rxjs';
import { UseCase } from 'src/core/core-interface/use-case';
import { Injectable } from '@angular/core';
import { SessionEntity } from '@models/session/session-entity';
import { SessionRepository } from '../../repositories/session/session.repository';

@Injectable()
export class GetSessionUseCase implements UseCase<{ email: string; password: string }, SessionEntity> {
  constructor(private sessionRepository: SessionRepository) {}

  execute(params: { email: string; password: string }): Observable<SessionEntity> {
    return this.sessionRepository.getSession(params);
  }
}
