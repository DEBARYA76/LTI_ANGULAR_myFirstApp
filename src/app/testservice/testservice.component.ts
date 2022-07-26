import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { UserService } from '../user.service';
import { Comment } from '../comment';

@Component({
  selector: 'app-testservice',
  templateUrl: './testservice.component.html',
  styleUrls: ['./testservice.component.css']
})
export class TestserviceComponent implements OnInit {


  post: Post[] = [];
  postId: number;
  comment: Comment[] = [];
   today:number=Date.now();
  employees:any[]=[
    
      {empid:'ei12',name:'john',dob:'01/5/22',salary:4067.88},
      {empid:'ei13',name:'jack',dob:'01/4/22',salary:4597.88},
      {empid:'ei14',name:'jill',dob:'01/7/22',salary:3567.88},
      {empid:'ei18',name:'jonny',dob:'01/12/22',salary:4567.88}
    
    
    
  ]
   
  // Post: Post;


  constructor(private userService: UserService) { }

  ngOnInit(): void {


    this.userService.getAllPosts()
      .subscribe
      (obj => {
        console.log(obj);
        this.post = obj;
      }
      );


    }

    getComments() {
  

      this.userService.getAllCommentByPostId(this.postId)
            .subscribe(
              comments => {
    
          this.comment = comments;
    
        });
    
      }

  }
  



