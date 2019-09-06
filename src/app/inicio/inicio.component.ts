import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { Usuario } from './usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  private usuarioAutenticado = false;

  private isMobileResolution: boolean;

  private usuario: Usuario = new Usuario();

  constructor( private routerMod: RouterModule, private router: Router) { }

  logar() {
    console.log('Logando!!!');
    this.router.navigate(['lista']);
  }

  autenticado(usuario: Usuario) {
    if (usuario.codigo === '102030' && usuario.senha === '123456') {

      this.usuarioAutenticado = true;
      this.router.navigate(['/lista']);
      console.log('Logado');
    } else {
      this.usuarioAutenticado = false;
      console.log('Falha na autenticação!');
    }
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
