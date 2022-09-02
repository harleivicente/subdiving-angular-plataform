import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { CurrentApplicationId, PLATAFORM_APPLICATION_ID } from '@pacto/sdk';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, MainLayoutComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([])
  ],
  providers: [
    { provide: CurrentApplicationId, useValue: PLATAFORM_APPLICATION_ID.TREINO_APP }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
