import { Component, OnInit } from '@angular/core';
import { PLATAFORM_MODULE_ID } from '@pacto/sdk';

@Component({
  selector: 'treino-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  get PLATAFORM_MODULE_ID() {
    return PLATAFORM_MODULE_ID;
  }

}
