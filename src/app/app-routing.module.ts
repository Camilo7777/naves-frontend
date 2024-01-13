import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanzaderaComponent } from './components/lanzadera/lanzadera.component';
import { TripuladaComponent } from './components/tripulada/tripulada.component';
import { NoTripuladaComponent } from './components/no-tripulada/no-tripulada.component';
import { AgregarNaveComponent } from './components/agregar-nave/agregar-nave.component';

const routes: Routes = [
  { path: 'lanzadera', component: LanzaderaComponent },
  { path: 'tripulada', component: TripuladaComponent },
  { path: 'no-tripulada', component: NoTripuladaComponent },
  { path: 'agregar-nave', component: AgregarNaveComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
