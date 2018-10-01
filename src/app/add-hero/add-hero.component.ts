import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {HeroInterface} from "../../../interfaces/hero.interface";
import {ListOfHeroesService} from "../list-of-heroes/list-of-heroes.service";
import {map} from "rxjs/operators";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit, OnDestroy {

  hero: HeroInterface = {};
  createHeroSub: Subscription;
  @Input() listOfHeroes: HeroInterface[];

  constructor(private listOfHeroesService: ListOfHeroesService) {
  }

  ngOnInit() {
    console.log('listOfheroes', this.listOfHeroes);
  }

  create(value: HeroInterface) {
    this.listOfHeroes.forEach(hero => {
      if (value.id === hero.id) {
        value.id += 1
      } else {
        this.createHeroSub = this.listOfHeroesService.createHero(value)
          .pipe(
            map((hero: HeroInterface) => this.listOfHeroes.push(hero))
          )
          .subscribe()
      }
    })


  }

  ngOnDestroy() {
    if (this.createHeroSub) {
      this.createHeroSub.unsubscribe();
      console.log('destroy');
    }
  }
}



