import { Inject, Injectable, InjectionToken } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppStateService, LoginUrl } from './app-state.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivateChild {

  constructor(
    private state: AppStateService,
    private router: Router,
    @Inject(LoginUrl) private loginUrl: string
  ) {}

  canActivateChild( 
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const canActivate = this.state.isLoggedIn();

      if (canActivate) {
        return true;
      }

      const isExternal = this.loginUrl.includes('http://');

      if (isExternal) {
        window.location.href = this.loginUrl;
      }

      return this.router.parseUrl(this.loginUrl);
  }
  
}
