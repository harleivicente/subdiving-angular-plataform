import { Component, OnInit } from '@angular/core';
import { NavigationService, TREINO_MODULE_ROUTE_ID } from '@pacto/sdk';

@Component({
  selector: 'treino-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'treino';

  constructor(private navigation: NavigationService) {}

  ngOnInit() {
  }
}
