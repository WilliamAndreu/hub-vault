import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoaderService {
  // Creamos un BehaviorSubject que mantiene el estado del loader
  private loaderSubject = new BehaviorSubject<boolean>(false);

  // Observable para suscribirse al estado del loader
  public loaderState = this.loaderSubject.asObservable();

  constructor() {}

  // Método para mostrar el loader
  showLoader() {
    this.loaderSubject.next(true);
  }

  // Método para ocultar el loader
  hideLoader() {
    this.loaderSubject.next(false);
  }

  // Método para obtener el valor actual del loader (true o false)
  getCurrentLoaderState(): boolean {
    return this.loaderSubject.value;
  }
}
