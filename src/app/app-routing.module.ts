import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ApplicationComponent } from './application/application.component';
import { HomeComponent } from './home/home.component';
import { JobslistComponent } from './jobslist/jobslist.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { PostjobsComponent } from './postjobs/postjobs.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'nav',component:NavComponent},
  {path:'postjobs',component:PostjobsComponent},
  {path:'jobslist',component:JobslistComponent},
  {path:'applicants-list',component:ApplicationComponent},
  {path:'about-us',component:AboutusComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
