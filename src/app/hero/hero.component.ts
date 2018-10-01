import {Component, OnInit} from '@angular/core';
import {ListOfHeroesService} from "../list-of-heroes/list-of-heroes.service";
import {ActivatedRoute} from "@angular/router";
import {map, tap} from "rxjs/operators";
import {HeroInterface} from "../../../interfaces/hero.interface";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  id;
  hero: HeroInterface;

  constructor(private listOfHeroesService: ListOfHeroesService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .pipe(
        map(params => this.id = params['id'])
      )
      .subscribe();

    this.listOfHeroesService.getOneHero(this.id).pipe(
      map(hero => this.hero = hero),
      tap(x => console.log('this.hero', this.hero))
    )
      .subscribe()
  }

  editHero() {
    this.listOfHeroesService.updateHero(this.hero.id, this.hero.name).subscribe();
    console.log('this.hero', this.hero.name);
  }

}
