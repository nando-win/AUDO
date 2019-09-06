import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

@Injectable()
export class ListaComponent implements OnInit {

  private isMobileResolution: boolean;

medicos = [
    {nome: 'Fernando Winston Cavalcante Bezerra'},
    {nome: 'Winston'},
  ];

  medicoSelecionado;

  constructor() {

  }

  ngOnInit() {
    if (window.innerWidth < 768) {
      this.isMobileResolution = false;
    } else {
      this.isMobileResolution = true;
    }
  }

  public getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }

}
