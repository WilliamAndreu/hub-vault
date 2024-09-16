import { Injectable, inject } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { GetSessionUseCase } from "@usecases/session/get-session.usecase";

@Injectable()
export class LoginViewModel {
  private _snackBar = inject(MatSnackBar);

  constructor(private router: Router, private getSessionUseCase: GetSessionUseCase) {}

  ngOnInit() {
    this.initializeViewModel();
  }

  private initializeViewModel(): void {}

  public navigateToHome() {
    this.router.navigate(["/main"]);
  }
  public login(email: string, password: string) {
    return this.getSessionUseCase.execute({ email, password }).subscribe({
      next: (res) => {
        
        this.navigateToHome();
      },
      error: async (err) => {
        const errorMessage = await this.AuthErrorHandler(err.toString());
        this._snackBar.open(errorMessage, "Cerrar", {
          duration: 2000,
        });
      },
    });
  }

  async AuthErrorHandler(errorMessage: string): Promise<string> {
    if (errorMessage.includes("auth/invalid-credential")) {
      return "Credenciales inválidas, por favor verifica tus datos.";
    } else {
      return errorMessage;
    }
  }
}
