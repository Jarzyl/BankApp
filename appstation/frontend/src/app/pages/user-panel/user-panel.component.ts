import { Component } from '@angular/core';
import { IMember } from 'src/app/models/interfaces/i-member';
import { User } from 'src/app/models/interfaces/user';
import { AccountService } from 'src/app/services/account.service';
import { BankClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent {
    public bankClient: IMember | any = null;
    public currentUser: User | any = null;
    public username: string | any;
    public isLoading: boolean | any;

    constructor(private accountService: AccountService, private clientService: BankClientService) { }

    ngOnInit(): void {
      this.setCurrentUser();
    }

    public setCurrentUser() {
      const userString = localStorage.getItem('user');
      if (!userString) return;
      const user: User = JSON.parse(userString);
      this.accountService.setCurrentUser(user);
      this.loadClient(user.username)
    }

    private loadClient(username: any) {
        this.isLoading = true;
        this.clientService.getBankClient(username).subscribe({
            next: (bankClient: IMember) => {
                this.bankClient = bankClient;
            },
            error: (error: any) => {
                this.isLoading = false;
                console.log(error);
            },
            complete: () => {
                this.isLoading = false;
            }
        });
    }

    editProfile() {
      
    }
}
