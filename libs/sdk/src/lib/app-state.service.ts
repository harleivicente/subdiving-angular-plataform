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

  private state: AppState = {
    isInitialized: false,
    isLoggedIn: false
  };

  get isLoggedIn() {
    return this.state.isLoggedIn;
  }

  get isInitialized() {
    return this.state.isInitialized;
  }

  public logIn(input: LoginInput) {
    this.state.isLoggedIn = true;
    this.state.enterpriseId = input.enterpriseId;  
    this.state.userId = input.userId;  
    this.state.token = input.token;  
  }

  public initializeApp(): Observable<boolean> {
    this.state.isInitialized = true;
    return of(true);
  }

  constructor() {}
}
