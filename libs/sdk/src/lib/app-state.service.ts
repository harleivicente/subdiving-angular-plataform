import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface AppState {
  isLoggedIn: boolean;
  isInitialized: boolean;
  enterpriseId?: number;
  userId?: number;
  token?: string;
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

  private _state: AppState = {
    isInitialized: false,
    isLoggedIn: false
  };

  get state() {
    return this._state;
  }

  get isLoggedIn() {
    return this._state.isLoggedIn;
  }

  get isInitialized() {
    return this._state.isInitialized;
  }

  public logIn(input: LoginInput) {
    this._state.isLoggedIn = true;
    this._state.enterpriseId = input.enterpriseId;  
    this._state.userId = input.userId;  
    this._state.token = input.token;  
  }

  public initializeApp(): Observable<boolean> {
    this._state.isInitialized = true;
    return of(true);
  }

  constructor() {}
}
