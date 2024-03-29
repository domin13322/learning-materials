import { Component, OnInit } from '@angular/core';
import { Account } from './models/account.model';
import { AccountsService } from './services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts!: Account[];

  constructor(private accountsService: AccountsService) { 
    this.accountsService.newAccountAdded.subscribe(() => {
      this.accounts = this.accountsService.getAccounts();
    })
    this.accountsService.newAccountAdded.subscribe(() => {
      this.accounts = this.accountsService.getAccounts();
    })
  }
  
  ngOnInit(): void {
    this.accounts = this.accountsService.getAccounts();
  }
}
