import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutusPageComponent } from './components/aboutus-page/aboutus-page.component';
import { ShopDetailsPageComponent } from './components/shop-details-page/shop-details-page.component';
import { ShopListPageComponent } from './components/shop-list-page/shop-list-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { FooterComponent } from './components/common-pages/footer/footer.component';
import { NavBarComponent } from './components/common-pages/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutusPageComponent,
    ShopDetailsPageComponent,
    ShopListPageComponent,
    ContactPageComponent,
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
