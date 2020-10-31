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
currentId = 1;
posts:any[];
  // constructor(studentService: StudentService) {
  //   this.students = studentService.getStudents();
  //  }

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
}