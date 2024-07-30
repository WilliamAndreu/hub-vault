import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponentComponent } from './shared-components/demo-component/demo-component.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [AppComponent, DemoComponentComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
