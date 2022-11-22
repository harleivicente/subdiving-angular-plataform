import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { 
  SdkModule,
  LoginComponent,
  LoginUrl,
  RedirectAfterLoginUrl,
  IsLoggedGuard,
  IsInitializedGuard,
  AppStateService,
  CurrentApplicationId,
  PLATAFORM_APPLICATION_ID
} from '@pacto/sdk';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UnidadeListaComponent } from './unidade-lista/unidade-lista.component';
import { PlanoListaComponent } from './plano-lista/plano-lista.component';
import { AdmStateService } from './adm-state.state.service';
import { AdmRootComponent } from './adm-root/adm-root.component';
import { PlanosRootComponent } from './planos-root/planos-root.component';
import { UnidadeCriarComponent } from './unidade-criar/unidade-criar.component';
import { PlanoCriarComponent } from './plano-criar/plano-criar.component';

@NgModule({
  declarations: [AppComponent, UnidadeListaComponent, PlanoListaComponent, AdmRootComponent, PlanosRootComponent, UnidadeCriarComponent, PlanoCriarComponent],
  imports: [
    SdkModule,
    BrowserModule,
    RouterModule.forRoot([

      {
        path: 'login',
        component: LoginComponent
      },

      //  Rotas protegidas por login
      {
        path: '',
        canActivateChild: [ IsLoggedGuard, IsInitializedGuard ],
        children: [

          // Modulo ADM
          {
            path: 'adm',
            component: AdmRootComponent,
            children: [
              {
                path: '',
                redirectTo: 'unidades/lista',
                pathMatch: 'full'
              },
              {
                path: 'unidades/lista',
                component: UnidadeListaComponent
              },
              {
                path: 'unidades/criar',
                component: UnidadeCriarComponent
              }
            ]
          },
    
          // Modulo Plano
          {
            path: 'planos',
            component: PlanosRootComponent,
            children: [
              {
                path: '',
                redirectTo: 'planos/lista',
                pathMatch: 'full'
              },
              {
                path: 'planos/lista',
                component: PlanoListaComponent
              },
              {
                path: 'planos/criar',
                component: PlanoCriarComponent
              }
            ]
          }

        ]
      }


    ], { initialNavigation: 'enabled' })
  ],
  providers: [
    { provide: LoginUrl, useValue: 'login' },
    { provide: RedirectAfterLoginUrl, useValue: 'planos/planos/lista' },
    { provide: AppStateService, useExisting: AdmStateService },
    { provide: CurrentApplicationId, useValue: PLATAFORM_APPLICATION_ID.ADM_APP }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
