import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CourseComponent } from './course/course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { TestserviceComponent } from './testservice/testservice.component';

const routes: Routes = [
{
path:'',component:HomeComponent
},
{
path:'homeLink',component:HomeComponent


},
{
path:'registerLink',component:RegisterComponent

},
{

path:'loginLink',component:LoginComponent

},
{
path:'dashboardLink',component:DashboardComponent,
children:[
 { path:'courseLink',component:CourseComponent,},
 { path:'profileLink',component:ProfileComponent,},
 { path:'changepasswordLink',component: ChangepasswordComponent,}

]
},


{
  path:"postLink",component:TestserviceComponent
},


{
  path:"**",component:ErrorpageComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {





 }
