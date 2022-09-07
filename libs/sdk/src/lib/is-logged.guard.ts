import { Inject, Injectable, InjectionToken } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppStateService } from './app-state.service';

export const LoginUrl = new InjectionToken<string>('Url to redirect to if user is not logged in');

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {

  constructor(
    private state: AppStateService,
    private router: Router,
    @Inject(LoginUrl) private loginUrl: string
  ) {}

  canActivate( 
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const canActivate = this.state.isLoggedIn;

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
