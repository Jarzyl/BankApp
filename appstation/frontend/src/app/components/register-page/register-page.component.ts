import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  registerMode = false;

  public registerToggleFunction() {
    this.registerMode = true;
    console.log(this.registerMode)
  }

  public closeRegisterMode(event: boolean) {
    this.registerMode = event;
  }

}
