import { Component, Input, OnInit } from '@angular/core';
import { NavigationService, plataformModules, PLATAFORM_MODULE_ID } from '@pacto/sdk';

export interface Modules {
  initials: string;

}

@Component({
  selector: 'treino-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  @Input() moduleTitle = '';

  get plataformModules() {
    return plataformModules;
  }

  constructor(protected navigationService: NavigationService) {}

  ngOnInit() {}

}
