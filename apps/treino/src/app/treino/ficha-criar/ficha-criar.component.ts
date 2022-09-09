import { Component, OnInit } from '@angular/core';
import { AppState, AppStateService } from '@pacto/sdk';
import { TreinoStateService } from '../../treino-state.service';

@Component({
  selector: 'treino-ficha-criar',
  templateUrl: './ficha-criar.component.html',
  styleUrls: ['./ficha-criar.component.scss']
})
export class FichaCriarComponent implements OnInit {

  constructor(protected state: TreinoStateService) { }

  ngOnInit() {}

}
