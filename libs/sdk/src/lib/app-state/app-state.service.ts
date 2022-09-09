import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppState, AppStateLocalStorage, LoginInput, LoginUrl } from './model';

@Injectable({
  providedIn: 'root'
})
export abstract class AppStateService {
  private localStorageKey = "pactoAppState";

  private _state: AppState = {
    isInitialized: false,
    isLoggedIn: false
  };

  get state() {
    return this._state;
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

  public async initializeIfNeeded() {
    if (this._state.isInitialized) return;
    await this.initialize();
    this._state.isInitialized = true;
  }

  public abstract initialize(): Promise<void>;

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
