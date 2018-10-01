import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HeroesComponent} from "./heroes/heroes.component";
import {AppRoutingModule} from "./app.routing.module";
import {ListOfHeroesComponent} from "./list-of-heroes/list-of-heroes.component";
import {HttpClientModule} from "@angular/common/http";
import {HeroComponent} from "./hero/hero.component";
import {FormsModule} from "@angular/forms";
import {AddHeroComponent} from "./add-hero/add-hero.component";


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ListOfHeroesComponent,
    HeroComponent,
    AddHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
