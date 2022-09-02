import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteLinkDirective } from './navigation/route-link.directive';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RouteLinkDirective,
    MainLayoutComponent
  ],
  exports: [
    RouteLinkDirective,
    MainLayoutComponent
  ]
})
export class SdkModule {}
