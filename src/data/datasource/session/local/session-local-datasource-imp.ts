import { Injectable } from "@angular/core";
import { SessionLocalDataSource } from "@data/datasource/session/source/session-local-datasource";
import { SessionDBO } from "../local/dbo/session.dbo";
import { CryptoService } from "src/core/services/cryto-service.service";

@Injectable()
export class SessionLocalDataSourceImp extends SessionLocalDataSource {
  constructor(private cryptoService: CryptoService) {
    // Inyectamos el servicio
    super();
  }

  override getSession(params: { email: string; password: string }): SessionDBO {
    throw ('error');
  }
}
