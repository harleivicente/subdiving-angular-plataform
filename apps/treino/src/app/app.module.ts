import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { 
  AppStateService,
  CurrentApplicationId,
  IsInitializedGuard,
  IsLoggedGuard,
  LoginComponent,
  LoginUrl,
  PLATAFORM_APPLICATION_ID,
  SdkModule
} from '@pacto/sdk';
import { RouterModule } from '@angular/router';
import { TreinoStateService } from './treino-state.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SdkModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        canActivateChild: [IsLoggedGuard, IsInitializedGuard],
        children: [
          {
            path: '',
            redirectTo: 'treino',
            pathMatch: 'full'
          },
          {
            path: 'treino',
            loadChildren: () => import('./treino/treino.module').then(module => module.TreinoModule),
          },
          {
            path: 'crossfit',
            loadChildren: () => import('./crossfit/crossfit.module').then(module => module.CrossfitModule)
          }
        ]
      },
    ])
  ],
  providers: [
    { provide: LoginUrl, useValue: 'login' },
    { provide: CurrentApplicationId, useValue: PLATAFORM_APPLICATION_ID.TREINO_APP },
    { provide: AppStateService, useExisting: TreinoStateService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
