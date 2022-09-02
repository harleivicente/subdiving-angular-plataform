import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PLATAFORM_MODULE_ID } from './modules';
import { NavigationService, PlataformUrl } from './navigation.service';
import { PlataformRoute, PLATAFORM_ROUTE_ID } from './_models';

@Directive({
  selector: 'a[sdkRouter], a[sdkModuleRouter]'
})
export class RouteLinkDirective implements OnInit {
  @Input() sdkModuleRouter: PLATAFORM_MODULE_ID;
  @Input() sdkRouter: PLATAFORM_ROUTE_ID;

  private urlDetails: PlataformUrl;

  @HostListener('click', ['$event'])
  clickHandler($event: PointerEvent) {
    if (this.urlDetails.isRelative) {
      $event.preventDefault();
      this.router.navigateByUrl(this.urlDetails.url);
    }
  }

  constructor(
    private router: Router,
    private navigation: NavigationService,
    private elementRef: ElementRef<HTMLElement>
  ) {}

  ngOnInit() {
    if (!this.sdkRouter && !this.sdkModuleRouter) return;

    if (this.sdkRouter) {
      this.urlDetails = this.navigation.getRouteUrl(this.sdkRouter);
    }

    if(this.sdkModuleRouter) {
      this.urlDetails = this.navigation.getModuleUrl(this.sdkModuleRouter);
    }

    this.elementRef.nativeElement.setAttribute('href', this.urlDetails.url);
  }

}
