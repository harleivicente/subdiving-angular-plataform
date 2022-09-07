import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'sdk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private appState: AppStateService,
    private router: Router
  ) { }

  ngOnInit() {}

  loginClick() {
    this.appState.logIn({
      enterpriseId: 1,
      token: 'ADF3ADFADF234ADFADF',
      userId: 2
    })
    this.router.navigate(['treino', 'fichas', 'lista'])
  }

}
