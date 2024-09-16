import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Auth, user } from '@angular/fire/auth';
@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  private auth = inject(Auth);
  user$ = user(this.auth);
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.user$.pipe(
      take(1), // Toma un valor y completa el observable
      map((user) => {
        if (user) {
          return true; // El usuario está autenticado
        } else {
          this.router.navigate(["/login"]); // Redirige al login si no está autenticado
          return false;
        }
      })
    );
  }
}