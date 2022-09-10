import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { GlobalSearchComponent } from './global-search/global-search.component';
import { LoginComponent } from './login/login.component';
import { GlobalSearchRouteComponent } from './global-search-route/global-search-route.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild([]),
    CommonModule
  ],
  declarations: [
    MainLayoutComponent,
    GlobalSearchComponent,
    GlobalSearchRouteComponent,
    LoginComponent
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class SdkModule {}
