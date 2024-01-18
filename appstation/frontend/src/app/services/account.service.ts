import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public baseUrl = "https://localhost:5001/api/";

  constructor(private httpClient: HttpClient) { }

  public login(model: any) {
    return this.httpClient.post(this.baseUrl + 'account/login', model);
  }
}