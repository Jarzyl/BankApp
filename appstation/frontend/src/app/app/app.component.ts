import { Component, OnInit } from "@angular/core";
import { User } from "../models/interfaces/user";
import { AccountService } from "../services/account.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "BankApp";

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.setCurrentUser();
  }

  public setCurrentUser() {
    const userString = localStorage.getItem("user");
    if (!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }
}
