import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideosListComponent } from './component/videos-list/videos-list.component';
import { MusicListComponent } from './component/music-list/music-list.component';
import { StudentService} from './services/students.services';
import { PostsService } from './services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    VideosListComponent,
    MusicListComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    StudentService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
