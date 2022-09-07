import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppStateService, CurrentApplicationId, IsLoggedGuard, LoginComponent, LoginUrl, PLATAFORM_APPLICATION_ID, SdkModule } from '@pacto/sdk';
import { RouterModule } from '@angular/router';
import { CrossfitModule } from './crossfit/crossfit.module';
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
        canActivate: [IsLoggedGuard],
        children: [
          {
            path: 'treino',
            loadChildren: () => import('./treino/treino.module').then(module => module.TreinoModule),
          },
          {
            path: 'crossfit',
            loadChildren: () => import('./crossfit/crossfit.module').then(module => module.CrossfitModule)
          },
          {
            path: '**',
            redirectTo: 'treino'
          },
        ]
      },
    ]),
    CrossfitModule,
  ],
  providers: [
    { provide: LoginUrl, useValue: 'login' },
    { provide: CurrentApplicationId, useValue: PLATAFORM_APPLICATION_ID.TREINO_APP },
    { provide: AppStateService, useExisting: TreinoStateService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
