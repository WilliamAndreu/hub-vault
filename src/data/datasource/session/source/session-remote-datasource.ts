import { Observable } from "rxjs";
import { SessionDTO } from "../remote/dto/session.dto";

export abstract class SessionRemoteDataSource {
  abstract getSession(params: { email: string; password: string }): Observable<SessionDTO>;
}