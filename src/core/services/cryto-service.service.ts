import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import * as CryptoJS from "crypto-js";

@Injectable({
  providedIn: "root",
})
export class CryptoService {
  private cryptoKey: string;

  constructor() {
    this.cryptoKey = environment.cryptoKey;
  }

  private encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, this.cryptoKey).toString();
  }

  private decrypt(value: string): string {
    const bytes = CryptoJS.AES.decrypt(value, this.cryptoKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  // Exponer los métodos de cifrado y descifrado como públicos
  public encryptData(value: string): string {
    return this.encrypt(value);
  }

  public decryptData(value: string): string {
    return this.decrypt(value);
  }
}
