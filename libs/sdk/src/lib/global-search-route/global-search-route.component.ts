import { Component, OnInit, Input, Inject } from '@angular/core';
import { PLATAFORM_APPLICATION_ID } from '../navigation/applications';
import { NavigationService } from '../navigation/navigation.service';
import { CurrentApplicationId, PlataformApplication, PlataformModule, StaticPlatformRoute } from '../navigation/_models';

@Component({
  selector: 'sdk-global-search-route',
  templateUrl: './global-search-route.component.html',
  styleUrls: ['./global-search-route.component.scss']
})
export class GlobalSearchRouteComponent implements OnInit {
  @Input() staticRoute: StaticPlatformRoute;
  protected module: PlataformModule;
  protected application: PlataformApplication;

  constructor(
    private navigation: NavigationService,
    @Inject(CurrentApplicationId) private currentAppId: PLATAFORM_APPLICATION_ID
  ) {}

  ngOnInit() {
    const moduleId = this.staticRoute.moduleId;
    this.module = this.navigation.getPlatformModule(moduleId);
    this.application = this.navigation.getPlataformApplication(this.module.applicationId);
  }

  isInternal() {
    return this.module.applicationId === this.currentAppId;
  }

  getExternalLink() {
    if (this.isInternal()) return '';
    return `${this.application.deployUrl}${this.staticRoute.url()}`;
  }
}
