import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { LoginViewModel } from "../viewmodel/login.viewmodel";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-login",
  templateUrl: "./login-view.component.html",
  styleUrl: "./login-view.component.scss",
})
export class LoginComponent {
  private _snackBar = inject(MatSnackBar);
  private viewModel = inject(LoginViewModel);

  public loginFormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),
  });

  public validateAndLogin() {
    const emailControl = this.loginFormGroup.get("email");
    const passwordControl = this.loginFormGroup.get("password");

    if (this.loginFormGroup.valid) {
      const email = emailControl?.value;
      const password = passwordControl?.value;

      this.viewModel.login(email!, password!);
    } else {
      this._snackBar.open("Email o contraseña incorrectos", "Close", {
        duration: 2000,
      });
    }
  }
}
