import {Component, OnInit} from '@angular/core';
import {ListOfHeroesService} from "./list-of-heroes.service";
import {map, tap} from "rxjs/operators";
import {HeroInterface} from "../../../interfaces/hero.interface";

@Component({
  selector: 'app-list-of-heroes',
  templateUrl: './list-of-heroes.component.html',
  styleUrls: ['./list-of-heroes.component.css']
})
export class ListOfHeroesComponent implements OnInit {

  listOfHeroes: HeroInterface[] = [];


  constructor(private listOfHeroesService: ListOfHeroesService) {
  }

  ngOnInit() {
    this.listOfHeroesService.getAllHeroes()
      .pipe(
        map((hero:HeroInterface[]) => this.listOfHeroes.push(...hero))
      )
      .subscribe();
    console.log('this.listOfHeroes', this.listOfHeroes);
  }

}
