import { Component, Input, OnInit } from '@angular/core';
import { plataformModules, PLATAFORM_MODULE_ID } from '../navigation/modules';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'sdk-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  @Input() moduleId: PLATAFORM_MODULE_ID;

  get plataformModules() {
    return plataformModules;
  }

  get currentModule() {
    return this.navigationService.getPlatformModule(this.moduleId);
  }

  constructor(protected navigationService: NavigationService) {}

  ngOnInit() {}

}
