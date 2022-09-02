import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { CurrentApplicationId, PLATAFORM_APPLICATION_ID } from '@pacto/sdk';

@NgModule({
  declarations: [AppComponent, MainLayoutComponent],
  imports: [BrowserModule],
  providers: [
    { provide: CurrentApplicationId, useValue: PLATAFORM_APPLICATION_ID.TREINO_APP }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
