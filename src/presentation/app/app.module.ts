import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { HttpClientModule } from "@angular/common/http";
import { DataModule } from "@data/data.module";
import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { provideAuth, getAuth } from "@angular/fire/auth";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, DataModule],
  providers: [
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: "AIzaSyCfiuqmHnrLnglP29AFLY_UONjRR3h2JMk",
        authDomain: "rudo-hub-vault.firebaseapp.com",
        databaseURL: "https://rudo-hub-vault-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "rudo-hub-vault",
        storageBucket: "rudo-hub-vault.appspot.com",
        messagingSenderId: "945968776942",
        appId: "1:945968776942:web:b927e84125747b084755ff",
        measurementId: "G-XCPQLHL313",
      })
    ),
    provideAuth(() => getAuth())
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
