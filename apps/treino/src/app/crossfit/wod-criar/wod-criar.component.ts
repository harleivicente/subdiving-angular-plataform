import { Component, OnInit } from '@angular/core';
import { plataformRoutes } from '@pacto/sdk';

@Component({
  selector: 'treino-wod-criar',
  templateUrl: './wod-criar.component.html',
  styleUrls: ['./wod-criar.component.scss']
})
export class WodCriarComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  
  get fichasAlunoLink() {
    return plataformRoutes.TREINO.FICHAS_DO_ALUNO.url(3);
  }



}
