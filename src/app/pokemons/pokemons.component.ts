import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../services.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  Pokemons: any = [];

  constructor(public services: ServicesService, private router: Router) { }

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    return this.services.getPokemons().subscribe(
  		data =>{
  			this.Pokemons=data.results;
    });
  }

  search(valueId) {
    console.log(valueId);
    return this.services.getPokemonsByNumber(valueId).subscribe(
      data =>{
        console.log(data.species.name);
        valueId = data.species.name;
        var route = "/pokemon-detail/"+valueId;
        this.router.navigate([route]);
      }
    );
  }

}
