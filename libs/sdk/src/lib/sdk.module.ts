import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteLinkDirective } from './navigation/route-link.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [RouteLinkDirective],
  exports: [
    RouteLinkDirective
  ]
})
export class SdkModule {}
