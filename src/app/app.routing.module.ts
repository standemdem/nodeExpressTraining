import {RouterModule, Routes} from "@angular/router";
import {HeroesComponent} from "./heroes/heroes.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ListOfHeroesComponent} from "./list-of-heroes/list-of-heroes.component";
import {HeroComponent} from "./hero/hero.component";

const AppRoutes: Routes = [
  {
    path: '',
    component: HeroesComponent,
  },
  {
    path: 'heroes',
    component: ListOfHeroesComponent,
  },
  {
    path:'heroes/:id',
    component: HeroComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {
}
