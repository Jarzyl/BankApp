import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { IMember } from "../models/interfaces/i-member";

@Injectable({
  providedIn: "root",
})
export class BankClientService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getBankClients() {
    return this.http.get<IMember[]>(this.baseUrl + "users");
  }

  getBankClient(username: string) {
    return this.http.get<IMember>(this.baseUrl + "users/" + username);
  }
}
