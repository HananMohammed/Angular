import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})

export class VideosListComponent implements OnInit {
title = "Videos List preview " ;
imgUrl = "https://www.thinkbigonline.com/wp-content/uploads/2013/09/google-penalties.jpg";
inputValue = " input Value" ;  
elementActive = true;
currentId:number;
posts:any[];
  // constructor(studentService: StudentService) {
  //   this.students = studentService.getStudents();
  //  }
  videos =[];

  constructor(postService: PostsService ){
    postService.getPosts().subscribe(
      res=>{
      this.posts = res
      },
      err=>console.log(err)
    )
  }
  ngOnInit(): void {
  }
// getTitle(){
//   return this.title ;
// }
activateCurrentPost(id){
  this.currentId = id ;
}
  removeVideo(index){
    console.log(index)
    this.videos.splice(index, 1) ;
  }
  addVideo() {
    this.videos.push({ title: "Fifth Video ", id: 5 });
  }
  showVideos(){
    this.videos = [

      { title: "First Video ", id: 1 },
      { title: "Second Video ", id: 2 },
      { title: "Third Video ", id: 3 },
      { title: "Fourth Video ", id: 4 },

    ]
  }
}
