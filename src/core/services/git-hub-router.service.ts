import { Injectable, Injector } from "@angular/core";
import { environment } from "@environments/environment";
import { BehaviorSubject } from "rxjs";
import { MainDirectoryInterface } from "../public-interface/main-directory-interface";
import { HttpClient } from "@angular/common/http";
import { DirectoryStorageService } from "./directory-storage.service";

@Injectable({
  providedIn: "root",
})
export class GithubRouterService {
  private routes: string[] = ["home"];
  private routesSubject = new BehaviorSubject<string[]>(this.routes);

  // Observable que otros componentes pueden suscribirse para recibir actualizaciones
  routes$ = this.routesSubject.asObservable();

  constructor(private directoryStorageService: DirectoryStorageService) {}
  // Método para procesar la URL y extraer directorios a partir de 'contents'
  processUrl(url: string): void {
    const cleanedUrl = this.cleanUrl(url);
    const extractedPaths = this.extractPathsFromUrl(cleanedUrl, "contents");

    // Añadir los directorios a las rutas, evitando duplicados
    let updated = false;
    extractedPaths.forEach((path) => {
      const isPathInMainDirectories = environment.mainDirectories.some((dir) => dir.directoryPath === path);

      if (!isPathInMainDirectories && !this.routes.includes(path)) {
        this.routes.push(path);
        updated = true;
      }
    });
    if (updated) {
      this.routesSubject.next([...this.routes]);
    }
  }

  // Método para limpiar la URL eliminando cualquier parte después de '?'
  private cleanUrl(url: string): string {
    const index = url.indexOf("?");
    return index !== -1 ? url.substring(0, index) : url;
  }

  // Método para extraer las rutas después de 'contents'
  private extractPathsFromUrl(url: string, basePath: string): string[] {
    const index = url.indexOf(basePath);
    if (index !== -1) {
      // Extraer la parte de la URL después de 'contents/'
      const relativePath = url.substring(index + basePath.length + 1);
      // Dividir la ruta en partes usando '/'
      return relativePath.split("/").filter((part) => part.length > 0);
    }
    return [];
  }

  // Método para navegar a una carpeta específica en las rutas
  navigateToFolder(index: number): void {
    if (index >= 0 && index < this.routes.length) {
      this.routes = this.routes.slice(0, index + 1);
      this.routesSubject.next([...this.routes]); // Notificar el cambio
    }
  }

  // Método para resetear las rutas almacenadas (manteniendo 'home')
  resetRoutes(): void {
    this.routes = ["home"];
    this.routesSubject.next([...this.routes]); // Notificar el reset
  }

  // Obtener las rutas actuales
  getRoutes(): string[] {
    return this.routes.filter((route) => route !== "home");
  }

  // Obtener la ruta actual como una cadena
  getCurrentPath(): string {
    const mainDirectory: MainDirectoryInterface = this.directoryStorageService.getMainDirectoryObservable().getValue();
    const routesMapped = this.routes.map((route) => (route === "home" ? mainDirectory.directoryPath : route));
    return routesMapped.join("/");
  }
  resetPathFromLastFolder() {
  if (this.routes.length > 1) {
    this.routes.pop();
    this.routesSubject.next([...this.routes]); 
  }
  }
}
