import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms';
import { Pipe, PipeTransform } from "@angular/core";
import { AppComponent } from './app.component';
 import { VideosListComponent } from './component/videos-list/videos-list.component';
import { MusicListComponent } from './component/music-list/music-list.component';
import { StudentService} from './services/students.services';
import { PostsService } from './services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { summaryPipe} from './pipes/summary.pipes';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { BootstrapJumbtronComponentComponent } from './components/bootstrap-jumbtron-component/bootstrap-jumbtron-component.component' ;

@NgModule({
  declarations: [
    AppComponent,
    VideosListComponent,
    MusicListComponent,
    summaryPipe,
    CountriesListComponent,
    BootstrapJumbtronComponentComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StudentService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
