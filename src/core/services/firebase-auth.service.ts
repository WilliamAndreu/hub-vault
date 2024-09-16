import { Injectable } from "@angular/core";
import { Auth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, User } from "@angular/fire/auth";
import { from, Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private currentUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private auth: Auth) {
    // Suscribirse a los cambios de estado de autenticación
    onAuthStateChanged(this.auth, (user) => {
      this.currentUser.next(user);
    });
  }

  signInWithEmail(email: string, password: string): Observable<User> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      map((credential) => {
        this.currentUser.next(credential.user);
        return credential.user;
      })
    );
  }

  signUpWithEmail(email: string, password: string): Observable<User> {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      map((credential) => {
        this.currentUser.next(credential.user);
        return credential.user;
      })
    );
  }

  signInWithGoogle(): Observable<User> {
    const provider = new GoogleAuthProvider();
    return from(signInWithPopup(this.auth, provider)).pipe(
      map((credential) => {
        this.currentUser.next(credential.user);
        return credential.user;
      })
    );
  }

  signOut(): Observable<void> {
    return from(signOut(this.auth)).pipe(
      map(() => {
        this.currentUser.next(null);
      })
    );
  }

  isAuthenticated(): Observable<boolean> {
    return this.currentUser.asObservable().pipe(map((user) => !!user));
  }

  getToken(): Observable<string | null> {
    return from(this.auth.currentUser?.getIdToken() ?? Promise.resolve(null));
  }

  getCurrentUser(): Observable<User | null> {
    return this.currentUser.asObservable();
  }
}
