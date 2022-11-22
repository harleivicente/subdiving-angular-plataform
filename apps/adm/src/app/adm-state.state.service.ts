import { Injectable } from '@angular/core';
import { AppStateService } from '@pacto/sdk';

@Injectable({
  providedIn: 'root'
})
export class AdmStateService extends AppStateService {

    public initialize(): Promise<void> {
        console.log('Initialized Adm application...')
        return Promise.resolve();
    }

}