import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogComponent } from './blog/blog.component';
import { TravelComponent } from './travel/travel.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    HomePageComponent,
    BlogComponent,
    TravelComponent,
    CartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
