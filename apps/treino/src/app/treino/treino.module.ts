import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SdkModule } from '@pacto/sdk';
import { RootComponent } from './root/root.component';
import { FichaListaComponent } from './ficha-lista/ficha-lista.component';
import { FichaCriarComponent } from './ficha-criar/ficha-criar.component';

@NgModule({
  declarations: [
    HomeComponent,
    RootComponent,
    FichaListaComponent,
    FichaCriarComponent
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
            redirectTo: 'fichas/lista',
            pathMatch: 'full'
          },
          {
            path: 'fichas/lista',
            component: FichaListaComponent
          },
          {
            path: 'fichas/criar',
            component: FichaCriarComponent
          }
        ]
      }
    ])
  ]
})
export class TreinoModule { }
