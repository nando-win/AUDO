import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor( private routerMod: RouterModule, private router: Router) { }

  ngOnInit() {
  }

  logar() {
    console.log('Logando!!!');
    this.router.navigate(['lista']);
  }

}
