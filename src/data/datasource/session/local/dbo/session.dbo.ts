
export interface SessionDBO {
  user: {
    uid: string; // ID único del usuario
    email: string | null | undefined; // Email del usuario
    displayName: string | null | undefined; // Nombre del usuario
    emailVerified: boolean; // Si el email fue verificado
    isAnonymous: boolean; // Si es un usuario anónimo
    phoneNumber: string | null | undefined; // Número de teléfono (si lo tiene)
    photoURL: string | null | undefined; // URL de la foto del perfil (si tiene)
    refreshToken: string; // Token de refresco para autenticación
  };
}

