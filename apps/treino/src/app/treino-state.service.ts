import { Injectable } from '@angular/core';
import { AppStateService, LoginInput } from '@pacto/sdk';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreinoStateService extends AppStateService {

  public logIn(input: LoginInput): void {
    console.log('FUCCKKKK IT')
    super.logIn(input);
  }

}
