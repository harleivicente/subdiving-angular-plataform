import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';
import { AppStateService } from './app-state/app-state.service';

@Injectable({
  providedIn: 'root'
})
export class IsInitializedGuard implements CanActivateChild {

  constructor(private appState: AppStateService) {}

  async canActivateChild(): Promise<boolean> {
    await this.appState.initialize();
    return true;
  }
  
}
