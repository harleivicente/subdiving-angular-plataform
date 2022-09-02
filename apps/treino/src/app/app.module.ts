import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentApplicationId, PLATAFORM_APPLICATION_ID, SdkModule } from '@pacto/sdk';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SdkModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'treino',
        loadChildren: () => import('./treino/treino.module').then(module => module.TreinoModule),
      },
      {
        path: 'crossfit',
        children: []
      },
      {
        path: '**',
        redirectTo: 'treino'
      },
    ]),
  ],
  providers: [
    { provide: CurrentApplicationId, useValue: PLATAFORM_APPLICATION_ID.TREINO_APP }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
