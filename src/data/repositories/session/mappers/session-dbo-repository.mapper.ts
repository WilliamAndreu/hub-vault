import { Mapper } from "src/core/core-interface/mapper";
import { SessionDBO } from "@data/datasource/session/local/dbo/session.dbo";
import { SessionEntity } from "@models/session/session-entity";

export class SessionDboRepositoryMapper extends Mapper<SessionEntity, SessionDBO> {
  mapTo(param: SessionDBO): SessionEntity {
    return {
      user: {
        uid: param.user.uid, // ID único del usuario
        email: param.user.email, // Email del usuario
        displayName: param.user.displayName, // Nombre del usuario
        emailVerified: param.user.emailVerified, // Si el email fue verificado
        isAnonymous: param.user.isAnonymous, // Si es un usuario anónimo
        phoneNumber: param.user.phoneNumber, // Número de teléfono (si lo tiene)
        photoURL: param.user.photoURL, // URL de la foto del perfil (si tiene)
        refreshToken: param.user.refreshToken, // Token de refresco para autenticación
      },

    };
  }

  mapFrom(param: SessionEntity): SessionDBO {
    return {
      user: {
        uid: param.user.uid, // ID único del usuario
        email: param.user.email, // Email del usuario
        displayName: param.user.displayName, // Nombre del usuario
        emailVerified: param.user.emailVerified, // Si el email fue verificado
        isAnonymous: param.user.isAnonymous, // Si es un usuario anónimo
        phoneNumber: param.user.phoneNumber, // Número de teléfono (si lo tiene)
        photoURL: param.user.photoURL, // URL de la foto del perfil (si tiene)
        refreshToken: param.user.refreshToken, // Token de refresco para autenticación
      } // Tipo de operación realizada
    };
  }
}
