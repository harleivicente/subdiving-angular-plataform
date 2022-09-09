import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

export const LoginUrl = new InjectionToken<string>('Url to redirect to if user is not logged in');

export interface AppState {
  isLoggedIn: boolean;
  isInitialized: boolean;
  enterpriseId?: number;
  userId?: number;
  token?: string;
}

export interface AppStateLocalStorage {
  enterpriseId: number;
  userId: number;
  token: string;
}

export interface LoginInput {
  enterpriseId: number;
  userId: number;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private localStorageKey = "pactoAppState";

  private _state: AppState = {
    isInitialized: false,
    isLoggedIn: false
  };

  get state() {
    return this._state;
  }

  get isInitialized() {
    return this._state.isInitialized;
  }

  constructor(
    @Inject(LoginUrl) private loginUrl: string,
    private router: Router
  ) {}

  public isLoggedIn() {
    if (this.state.isLoggedIn) {
      return true;
    }

    // Check if local state has login information
    const loginState = this.fetchStateInLocalStorage();

    if (!loginState) return false;

    this.logIn(loginState);
    return true;
  }

  public logIn(input: LoginInput) {
    this._state.isLoggedIn = true;
    this._state.enterpriseId = input.enterpriseId;  
    this._state.userId = input.userId;  
    this._state.token = input.token;
    this.persistStateInLocalStorage({
      enterpriseId: input.enterpriseId,
      token: input.token,
      userId: input.userId
    });
  }

  public logout(redirectToLogin = true) {
    this._state.isLoggedIn = false;
    this._state.enterpriseId = null;  
    this._state.userId = null;  
    this._state.token = null;
    this.clearStateInLocalStorage();
    if (redirectToLogin) {

      const isExternal = this.loginUrl.includes('http://');

      if (isExternal) {
        window.location.href = this.loginUrl;
      } else {
        this.router.navigateByUrl(this.loginUrl);
      }
    }
  }

  public initializeApp(): Observable<boolean> {
    this._state.isInitialized = true;
    return of(true);
  }

  private persistStateInLocalStorage(state: AppStateLocalStorage) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(state));
  }

  private fetchStateInLocalStorage(): AppStateLocalStorage {
    const state = localStorage.getItem(this.localStorageKey);
    return state ? JSON.parse(state) : null;
  }

  private clearStateInLocalStorage() {
    localStorage.setItem(this.localStorageKey, null);
  }

}
