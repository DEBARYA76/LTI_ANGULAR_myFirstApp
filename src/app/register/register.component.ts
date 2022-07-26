import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { User } from "../user";

@Component({
selector:'app-register',
templateUrl:'./register.component.html',
styleUrls:['./register.component.css']
})
export class RegisterComponent 
{ 
    user:User= new User();
    // user1:User=new User();
    // user2=new User();

    constructor()
    {
        this.user.userName="Arya";
        this.user.password="'1'234";
        this.user.email="iam@lti.com";
        this.user.mobile="84882";
        this.user.city="city of joy";
    }


    register():void{
        console.log(this.user);
    }


}