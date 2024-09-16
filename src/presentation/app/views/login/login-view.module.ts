import { NgModule } from "@angular/core";
import { LoginComponent } from "./view/login-view.component";
import { LoginViewModel } from "./viewmodel/login.viewmodel";
import { LoginViewRoutingModule } from "./login-view-routing.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginViewRoutingModule, ReactiveFormsModule],
  providers: [LoginViewModel],
})
export class LoginModule {}
