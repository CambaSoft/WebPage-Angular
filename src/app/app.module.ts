import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarrasuperiorComponent } from './barrasuperior/barrasuperior.component';
import { GeneralComponent } from './general/general.component';
import { Fila1Component } from './fila1/fila1.component';
import { Fila2Component } from './fila2/fila2.component';
import { Fila3Component } from './fila3/fila3.component';
import { Fila4Component } from './fila4/fila4.component';
import { BarrainferiorComponent } from './barrainferior/barrainferior.component';



@NgModule({
  declarations: [
    AppComponent,
    BarrasuperiorComponent,
    GeneralComponent,
    Fila1Component,
    Fila2Component,
    Fila3Component,
    Fila4Component,
    BarrainferiorComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
