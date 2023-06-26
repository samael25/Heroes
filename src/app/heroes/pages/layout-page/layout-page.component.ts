import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent implements OnInit {
sidebarItems = [
  {label: 'Listado', icon: 'label', url: './list'},
  {label: 'Añadir', icon: 'add', url: './new-hero'},
  {label: 'Buscar', icon: 'search', url: './search'},
]
  constructor() { }

  ngOnInit(): void {
  }

}
