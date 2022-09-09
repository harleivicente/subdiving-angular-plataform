import { InjectionToken } from "@angular/core";

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