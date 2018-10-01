import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ListOfHeroesService {

  constructor(private httpClient: HttpClient) {
  }

  getAllHeroes() {
    const url = `http://localhost:3200/heroes/all`;
    return this.httpClient.get(url);
  }

  getOneHero(id) {
    const url = `http://localhost:3200/heroes/${id}`;
    return this.httpClient.get(url);
  }

  updateHero(id, data) {
    const url = `http://localhost:3200/heroes/${id}`;
    return this.httpClient.put(url, data)
  }
}
