import { Component, OnInit } from '@angular/core';
import { publicPlataformRoutes, publicPlataformRoutesByModule } from '@pacto/sdk';

@Component({
  selector: 'treino-ficha-lista',
  templateUrl: './ficha-lista.component.html',
  styleUrls: ['./ficha-lista.component.scss']
})
export class FichaListaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log({
      publicPlataformRoutes,
      publicPlataformRoutesByModule
    });
    
  }

}
