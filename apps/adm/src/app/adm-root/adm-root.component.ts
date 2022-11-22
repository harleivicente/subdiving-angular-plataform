import { Component, OnInit } from '@angular/core';
import { PLATAFORM_MODULE_ID } from '@pacto/sdk';

@Component({
  selector: 'pacto-subdividing-platform-adm-root',
  templateUrl: './adm-root.component.html',
  styleUrls: ['./adm-root.component.scss']
})
export class AdmRootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get PLATAFORM_MODULE_ID() {
    return PLATAFORM_MODULE_ID;
  }

}
