import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  public baseUrl = "https://localhost:5001/api/";

  constructor(private httpClient: HttpClient) {}

  private currentUserStatus = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserStatus.asObservable();

  public loggedIn: boolean = false;

  public logIn(model: any) {
    return this.httpClient.post<User>(this.baseUrl + "account/login", model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUserStatus.next(user);
        }
        return user;
      })
    );
  }

  public logOut() {
    localStorage.removeItem('user');
    this.currentUserStatus.next(null);
  }

  public register(model: any) {
    return this.httpClient.post<User>(this.baseUrl + "account/register", model).pipe(
      map(user => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUserStatus.next(user);
        }
        return user;
      }))
  }

  public setCurrentUser(user: User): void {
    this.currentUserStatus.next(user);
  }
}
