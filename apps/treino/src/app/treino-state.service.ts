import { Injectable } from '@angular/core';
import { AppStateService, LoginInput } from '@pacto/sdk';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreinoStateService extends AppStateService {

  public async initialize(): Promise<void> {
    await this.obterAlunos();
    await this.obterTreinos();
  }

  private async obterTreinos() {
    return new Promise(r => {
      console.log('Inicializando - Obtendo Treinos....');
      setTimeout(() => {
        r(true);
      }, 300);
    });
  }

  private async obterAlunos() {
    return new Promise(r => {
      console.log('Inicializando - Obtendo Alunos....');
      setTimeout(() => {
        r(true);
      }, 400);
    });
  }

}
