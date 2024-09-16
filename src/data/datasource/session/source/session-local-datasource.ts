import { Observable } from "rxjs";
import { SessionDBO } from "../local/dbo/session.dbo";

export abstract class SessionLocalDataSource {
  abstract getSession(params: { email: string; password: string }): SessionDBO;
}