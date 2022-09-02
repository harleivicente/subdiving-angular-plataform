import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { CurrentApplicationId, PLATAFORM_APPLICATION_ID, SdkModule } from '@pacto/sdk';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, MainLayoutComponent],
  imports: [
    SdkModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'treino',
        children: [],
      },
      {
        path: 'crossfit',
        children: []
      }
    ]),
  ],
  providers: [
    { provide: CurrentApplicationId, useValue: PLATAFORM_APPLICATION_ID.TREINO_APP }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
