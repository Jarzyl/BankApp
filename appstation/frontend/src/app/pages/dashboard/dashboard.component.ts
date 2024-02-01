import { Component, OnInit } from '@angular/core';
import { IMember } from 'src/app/models/interfaces/i-member';
import { User } from 'src/app/models/interfaces/user';
import { AccountService } from 'src/app/services/account.service';
import { BankClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public members: IMember[] = [];
  public bankClient: IMember | any = null;
  public currentUser: User | any = null;
  public username: string | any;
  public isLoading: boolean | any;

  constructor(private accountService: AccountService, private clientService: BankClientService) { }

  ngOnInit(): void {
    // this.accountService.currentUser$.subscribe(user => {
    //   this.currentUser = user;
    //   this.username = user?.username;
    // });
    // this.loadClient();
    this.setCurrentUser();
  }

  
  public setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
    this.loadClient(user.username)
  }

  private loadMembers() {
    this.clientService.getBankClients().subscribe({
      next: members => this.members = members,
      error: error => console.log(error)
      })
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
}
