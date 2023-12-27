import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagementTaskComponent} from 'src/app/Components/Task/management-task/management-task.component'
import {SearchTaskComponent} from 'src/app/Components/Task/search-task/search-task.component'
import {HomeComponent} from 'src/app/Components/Dashboard/home/home.component'
import {RegisterComponent} from 'src/app/Components/Login/register/register.component'
import {SignInComponent} from 'src/app/Components/Login/sign-in/sign-in.component'
import {DashboardComponent} from 'src/app/Components/Dashboard/dashboard/dashboard.component'
const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent, children: [
    { path: 'Home', component: HomeComponent },
    { path: 'ManagementTask', component: ManagementTaskComponent },
    { path: 'SearchTask', component: SearchTaskComponent }
  ]},
  { path: 'SignIn', component: SignInComponent },
  { path: 'Register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
