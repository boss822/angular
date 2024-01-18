import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutusPageComponent } from './components/aboutus-page/aboutus-page.component';
import { ShopListPageComponent } from './components/shop-list-page/shop-list-page.component';
import { ShopDetailsPageComponent } from './components/shop-details-page/shop-details-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

const routes: Routes = [
  {
    path:"",redirectTo:"home-page",pathMatch:"full"
  },
  {
    path:"home-page",component:HomePageComponent
  },
  {
    path:"aboutus-page",component:AboutusPageComponent
  },
  {
    path:"shop-list-page",component:ShopListPageComponent
  },
  {
    path:"shop-details-page",component:ShopDetailsPageComponent
  },
  {
    path:"contact-page",component:ContactPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
