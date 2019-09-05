import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule,
  MatCardModule, MatMenuModule, MatIconModule, MatExpansionModule, MatOption, MatOptionModule, MatSelectModule } from '@angular/material';
import { ListaComponent } from './lista/lista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule,
    MatCardModule, MatMenuModule, MatIconModule, MatExpansionModule, MatOptionModule, MatSelectModule,
    FormsModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule,
    MatCardModule, MatMenuModule, MatIconModule, MatExpansionModule, MatOptionModule, MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
