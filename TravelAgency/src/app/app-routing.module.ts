import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogComponent } from './blog/blog.component';
import { TravelComponent } from './travel/travel.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
	{
		path:"",component: HomePageComponent
	},
	{
		path:"blog",component: BlogComponent
	},
	{
		path:"travel",component: TravelComponent
	},
	{
		path: "cart", component: CartComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
