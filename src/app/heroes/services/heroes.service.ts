import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/hero.interface';
import { environment } from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class HeroesService {
  urlApi: string = environment.urlApi;

  constructor(private readonly http: HttpClient) { }

  getHeroes():Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${ this.urlApi }/heroes`);
  }

  // getHeroes() {
  //   return this.httpApiService.httpApi<Heroe[]>(
  //     HttpRequestMethod.GET,
  //     `heroes/`
  //   );
  // }

}
