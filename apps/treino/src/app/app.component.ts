import { Component, OnInit } from '@angular/core';
import { NavigationService, TREINO_MODULE_ROUTE_ID, ADM_MODULE_ROUTE_ID } from '@pacto/sdk';

@Component({
  selector: 'treino-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'treino';

  constructor(private navigation: NavigationService) {}

  ngOnInit() {}

  get TREINO_MODULE_ROUTE_ID() {
    return TREINO_MODULE_ROUTE_ID;
  }

  get ADM_MODULE_ROUTE_ID() {
    return ADM_MODULE_ROUTE_ID;
  }
}
