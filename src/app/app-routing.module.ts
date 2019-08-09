import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonsComponent  } from './pokemons/pokemons.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pokemons' },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'pokemon-detail/:name', component: PokemonDetailComponent },
  { path: 'pokemon-detail/:id', component: PokemonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
