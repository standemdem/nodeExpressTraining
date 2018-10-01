import {Component, Input, OnInit} from '@angular/core';
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

  @Input() hero: HeroInterface;

  constructor(private listOfHeroesService: ListOfHeroesService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.listOfHeroesService.getOneHero(id).pipe(
      map(hero => this.hero = hero),
      tap(x => console.log('this.hero', this.hero))
    )
      .subscribe()
  }

  editHero(value) {
    console.log('this.hero', this.hero);
    this.listOfHeroesService.updateHero(this.hero.id,value)
      .subscribe();

  }

}
