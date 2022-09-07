import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouteLinkDirective } from './navigation/route-link.directive';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { GlobalSearchComponent } from './global-search/global-search.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    RouteLinkDirective,
    MainLayoutComponent,
    GlobalSearchComponent,
    LoginComponent
  ],
  exports: [
    RouteLinkDirective,
    MainLayoutComponent
  ]
})
export class SdkModule {}
