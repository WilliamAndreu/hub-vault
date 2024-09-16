import { Mapper } from 'src/core/core-interface/mapper';
import { SessionDTO } from '../../../datasource/session/remote/dto/session.dto';
import { SessionEntity } from '@models/session/session-entity';
import { Session } from 'inspector';



export class SessionDtoRepositoryMapper extends Mapper<SessionEntity, SessionDTO> {
  mapTo(param: SessionDTO): SessionEntity {
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
      }
      
    };
  }

  mapFrom(param: SessionEntity): SessionDTO {
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
      }
    };
  }
}
