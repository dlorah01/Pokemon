import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any>{
  	return this.http.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964');
  }

  getPokemonsByName(name):Observable<any>{
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + name);
  }

  getPokemonsByNumber(name):Observable<any>{
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + name);
  }

  getPokemonsByAbility(name): Observable<any>{
    return this.http.get('https://pokeapi.co/api/v2/ability/' + name);
  }
}
