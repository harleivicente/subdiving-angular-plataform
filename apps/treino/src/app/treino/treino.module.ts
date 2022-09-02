import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CurrentModuleId, PLATAFORM_MODULE_ID, SdkModule } from '@pacto/sdk';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [
    HomeComponent,
    RootComponent
  ],
  imports: [
    SdkModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RootComponent,
        children: [
          {
            path: '',
            component: HomeComponent
          }
        ]
      }
    ])
  ]
})
export class TreinoModule { }
