import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

val:any;

  constructor(private httpClient: HttpClient) { 
   }
   
   
   getAllPosts():Observable<Post[]>{
       return this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
   } 
   
   
  //  getAllPosts(){}
  getComments(){}
  getAllUsers(){}
  getAllCommentByPostId(postId:number):Observable<Comment[]>
  {
    return this.httpClient.get<Comment[]>("https://jsonplaceholder.typicode.com/posts/"+postId+"/comments");


  }
}
