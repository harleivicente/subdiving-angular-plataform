import { Component, OnInit } from '@angular/core';
import { PLATAFORM_MODULE_ID } from '@pacto/sdk';

@Component({
  selector: 'pacto-subdividing-platform-planos-root',
  templateUrl: './planos-root.component.html',
  styleUrls: ['./planos-root.component.scss']
})
export class PlanosRootComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  get PLATAFORM_MODULE_ID() {
    return PLATAFORM_MODULE_ID;
  }


}
