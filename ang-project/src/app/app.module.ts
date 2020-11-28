import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { BindingComponent } from './components/binding/binding.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component'
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './components/details/details.component';

const routeLinks = [
  { path: 'egypt-news', component: HomeComponent },
  { path: 'SA-news', component: AboutComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'binding', component: BindingComponent },
] ;

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routeLinks),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
