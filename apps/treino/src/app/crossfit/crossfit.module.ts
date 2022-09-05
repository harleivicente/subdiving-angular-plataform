import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SdkModule } from '@pacto/sdk';
import { WodListaComponent } from './wod-lista/wod-lista.component';
import { WodCriarComponent } from './wod-criar/wod-criar.component';

@NgModule({
  declarations: [
    RootComponent,
    HomeComponent,
    WodListaComponent,
    WodCriarComponent
  ],
  imports: [
    CommonModule,
    SdkModule,
    RouterModule.forChild([
      {
        path: '',
        component: RootComponent,
        children: [
          {
            path: '',
            redirectTo: 'wods/lista',
            pathMatch: 'full'
          },
          {
            path: 'wods/lista',
            component: WodListaComponent
          },
          {
            path: 'wods/criar',
            component: WodCriarComponent
          }
        ]
      }
    ])
  ]
})
export class CrossfitModule { }
