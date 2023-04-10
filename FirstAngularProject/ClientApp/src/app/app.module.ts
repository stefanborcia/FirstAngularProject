import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SearchFirstangularprojectComponent } from './search-firstangularproject/search-firstangularproject.component';
import { BookFlightComponent } from './book-flight/book-flight.component';


@
NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SearchFirstangularprojectComponent,
    BookFlightComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: SearchFirstangularprojectComponent, pathMatch: 'full' },
      { path: 'search-flights', component: SearchFirstangularprojectComponent },
      { path: 'book-flight/:flightId', component: BookFlightComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
