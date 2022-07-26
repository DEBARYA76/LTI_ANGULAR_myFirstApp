import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage="";

  constructor(private router:Router) { 

  }

  ngOnInit(): void {
  }
  user:User = new User();
  login():void{
      
    if(this.user.userName=="Arya"&& this.user.password == "pass@04")
    {
      sessionStorage.setItem("un",this.user.userName);
     this.router.navigate(['./dashboard link']);
    }
    else{
      this.errorMessage="Username and password invalid";
    }
  }
}
// import { Component, OnInit } from '@angular/core';
// import { User } from "../user";

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   user:User=new User();
//   constructor() { }

//   ngOnInit(): void {
//   }

// }