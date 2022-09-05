import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CurrentModuleId, PLATAFORM_MODULE_ID, SdkModule } from '@pacto/sdk';
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
            redirectTo: 'ficha/lista'
          },
          {
            path: 'ficha/lista',
            component: FichaListaComponent
          },
          {
            path: 'ficha/criar',
            component: FichaCriarComponent
          }
        ]
      }
    ])
  ]
})
export class TreinoModule { }
