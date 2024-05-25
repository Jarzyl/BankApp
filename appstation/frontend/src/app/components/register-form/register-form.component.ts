import { Component } from "@angular/core";
import { WarningMessageType } from "src/app/models/enums/message-types.enum";
import { AccountService } from "src/app/services/account.service";
import { SnackBarService } from "src/app/services/snack-bar.service";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"],
})
export class RegisterFormComponent {
  model: any = {};

  constructor(private accountService: AccountService, private snackBarService: SnackBarService) {}

  public register() {
    this.accountService.register(this.model).subscribe({
      next: (response) => {
        console.log(response);
        // this.cancel();
      },
      error: (error) => {
        console.log(error);
        this.snackBarService.openSnackBar(error.error, WarningMessageType.FadingError); 
        //TODO: bedzie object object przy rejestracji z dwoma pustymi polami, poprawić to w przyszłości, gdy będę zajmował się obsługą błędów
        //TODO: najpierw walidacja formularzy
      },
    });
  }

  cancel() {
  }
}
