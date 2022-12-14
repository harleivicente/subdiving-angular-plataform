import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppStateService } from '../app-state/app-state.service';
import { RedirectAfterLoginUrl } from '../app-state/model';

@Component({
  selector: 'sdk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private appState: AppStateService,
    private router: Router,
    @Inject(RedirectAfterLoginUrl) private redirectAfterLoginUrl: string
  ) {}

  ngOnInit() {}

  loginClick() {
    this.appState.logIn({
      enterpriseId: 1,
      token: 'ADF3ADFADF234ADFADF',
      userId: 2
    })
    this.router.navigateByUrl(this.redirectAfterLoginUrl);
  }

}
