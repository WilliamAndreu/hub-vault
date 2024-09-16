import { Injectable, inject } from "@angular/core";
import { Observable, from } from "rxjs";
import { Auth, signInWithEmailAndPassword } from "@angular/fire/auth";
import { HttpClient } from "@angular/common/http";
import { SessionRemoteDataSource } from "@data/datasource/session/source/session-remote-datasource";
import { SessionDTO } from "@data/datasource/session/remote/dto/session.dto";
import { map, catchError } from "rxjs/operators";

@Injectable()
export class SessionRemoteDataSourceImp extends SessionRemoteDataSource {
  private auth = inject(Auth);

  constructor(public http: HttpClient) {
    super();
  }

  override getSession(params: { email: string; password: string }): Observable<SessionDTO> {
    return from(signInWithEmailAndPassword(this.auth, params.email, params.password)).pipe(
      map((res) => {
        const session: SessionDTO = {
          user: res.user,
        };
        return session;
      }),
      catchError((error) => {
        console.error("Error en la autenticación", error);
        throw error;
      })
    );
  }
}
