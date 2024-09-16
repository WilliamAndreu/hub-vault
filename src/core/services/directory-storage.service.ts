import { Injectable, inject } from "@angular/core";
import { environment } from "@environments/environment";
import * as CryptoJS from "crypto-js";
import { BehaviorSubject } from "rxjs";
import { MainDirectoryInterface } from "../public-interface/main-directory-interface";
import { CryptoService } from "./cryto-service.service";

@Injectable({
  providedIn: "root",
})
export class DirectoryStorageService {
  private readonly techKey = "S_T_K";
  private readonly cryptoKey = environment.cryptoKey;
  private selectedTechSubject: BehaviorSubject<MainDirectoryInterface>;
  constructor() {
    const initialValue = this.loadInitialValue();
    this.selectedTechSubject = new BehaviorSubject<MainDirectoryInterface>(initialValue);
  }

  setMainDirectory(value: MainDirectoryInterface): void {
    const encryptedValue = this.encrypt(JSON.stringify(value));
    localStorage.setItem(this.techKey, encryptedValue);
    this.selectedTechSubject.next(value);
  }

  getMainDirectoryObservable(): BehaviorSubject<MainDirectoryInterface> {
    return this.selectedTechSubject;
  }
  private getMainDirectoryStorageItem(): string | null {
    return localStorage.getItem(this.techKey);
  }

  private loadInitialValue(): MainDirectoryInterface {
    const localValue = this.getMainDirectoryStorageItem();
    return localValue ? (JSON.parse(this.decrypt(localValue)) as MainDirectoryInterface) : (environment.mainDirectories[0] as MainDirectoryInterface);
  }

  private encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, this.cryptoKey!).toString();
  }

  private decrypt(value: string): string {
    const bytes = CryptoJS.AES.decrypt(value, this.cryptoKey!);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
