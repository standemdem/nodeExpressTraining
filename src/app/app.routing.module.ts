import {RouterModule, Routes} from "@angular/router";
import {HeroesComponent} from "./heroes/heroes.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ListOfHeroesComponent} from "./list-of-heroes/list-of-heroes.component";

const AppRoutes: Routes = [
  {
    path: '',
    component: HeroesComponent,
  },
  {
    path: 'heroes',
    component: ListOfHeroesComponent,
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
