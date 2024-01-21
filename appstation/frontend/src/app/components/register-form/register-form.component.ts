import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AccountService } from "src/app/services/account.service";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"],
})
export class RegisterFormComponent {
  @Output() closeRegisterForm = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService) {}

  public register() {
    this.accountService.register(this.model).subscribe({
      next: (response) => {
        console.log(response);
        // this.cancel();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  cancel() {
    this.closeRegisterForm.emit(false);
  }
}
