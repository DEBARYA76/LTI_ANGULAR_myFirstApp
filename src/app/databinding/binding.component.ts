import { Component } from "@angular/core";


@Component({
    selector:'app-bind',
//inline template
    template:`
         <p>
           My first paragraph
         </p>

         <button [disabled]= isDisabled  id="btn" (click)="onClick()">{{buttonText}}</button>
    {{message}}
    <br/>
    // <img src="{{imgPath}}"/>
    <img [src]=imgPath/>
    // <input type="text" [value]='name' (input)='name=$any($event.target).value'/>
        <input type="text"  [(ngModel)]='name'/>
    
    <br/>
    {{name}}

    `,

    //inline style
    styles:[`
       p{color:red}
        button{width:100px;height:200px;}
         `
    ]
})



export class BindingComponent {
    message:string="hi friends";
    // isDisabled:boolean=true;
    isDisabled:boolean=false;
    imgPath="./assets/images/Be-agile-237x300.png";
         i=0;
    buttonText="Click";
    name:string="";
    myinput()
    {
    }


    onClick():void{
        console.log('Button Clicked');
        this.buttonText=""+(++this.i);
    }

}