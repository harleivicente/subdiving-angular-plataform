import { InjectionToken } from "@angular/core";

export const LoginUrl = new InjectionToken<string>(
  'LoginUrl: Url to redirect to if user is not logged in'
);

export const RedirectAfterLoginUrl = new InjectionToken<string>(
  'RedirectAfterLoginUrl: Where to redirect after login is successful'
);

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