import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class IbanService {
  
  baseURL = "http://localhost:2400/api/v1";
  constructor(private http: HttpClient) {}
  getBalance(){
    return this.http.get(`${this.baseURL}/balance`);
  }

  processTransfer(amount: number, currency: string, iban: string) {
    console.log(amount, currency, iban);
    return this.http.post(`${this.baseURL}/transfer/${iban}`, {
      amount,
      currency,
    });
  }

  validateIBAN(val: any) {
    return this.http.get(`${this.baseURL}/bank/${val}`);
  }

  getCountryDetails(country) {
    return this.http.get(
      `${this.baseURL}/static/data-lookup/${country.toUpperCase()}`
    );
  }
}
