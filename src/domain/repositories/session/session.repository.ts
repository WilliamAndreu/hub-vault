import { Observable } from 'rxjs';
import { SessionEntity } from '@models/session/session-entity';

export abstract class SessionRepository {
  abstract getSession(params : {email: string, password: string}): Observable<SessionEntity>;
}
