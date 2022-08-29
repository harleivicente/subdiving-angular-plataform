import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'treino-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  @Input() moduleTitle = '';

  constructor() { }

  ngOnInit() {
  }

}
