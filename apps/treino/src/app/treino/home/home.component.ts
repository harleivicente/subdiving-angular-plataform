import { Component, Inject, OnInit, Optional } from '@angular/core';
import { CurrentModuleId, PLATAFORM_MODULE_ID, PLANOS_MODULE_ROUTE_ID } from '@pacto/sdk';

@Component({
  selector: 'treino-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    @Optional() @Inject(CurrentModuleId) protected currentModuleId: PLATAFORM_MODULE_ID
  ) {}

  ngOnInit() {}

  get PLATAFORM_MODULE_ID() {
    return PLATAFORM_MODULE_ID;
  }

  get PLANOS_MODULE_ROUTE_ID() {
    return PLANOS_MODULE_ROUTE_ID;
  }

}
