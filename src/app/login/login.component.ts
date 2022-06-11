import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user'; 
import { GeneralService } from '../general.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //encapsulation:ViewEncapsulation.None
})

export class LoginComponent implements OnInit {

  constructor(private router:Router,public http:HttpClient,public gen:GeneralService) { }

  ngOnInit(): void {
  }
  userModel =new User("","","");
  login(){
    //console.log(this.userModel.name,this.userModel.pswd)
  // if(this.userModel.name=="pranitha"&&this.userModel.pswd=="adr")
  // {
  //   this.router.navigate(['/login'])
  // }
  // else{
  //   alert("Invalid username or password");
  //   this.router.navigate([''])
  // }
  console.log(this.userModel.mode)
  var url=""
  var studenturl="http://127.0.0.1:8000/resume_extraction/api/v1/student_login"
  var recruiterurl="http://127.0.0.1:8000/resume_extraction/api/v1/employer_login"
  this.gen.setModer(this.userModel.mode)
  console.log(this.gen.getModer())
  if(this.userModel.mode=="recruiter"){
  url=recruiterurl
  var postData={
    "email": this.userModel.name,
    "password": this.userModel.pswd
  }
  this.http.post(url,postData).subscribe(
    (response) => {  
          console.log("added")
          this.router.navigate(['/register'])
    },
    (error) => {   
     // error.error.detail
   console.log(error)
    }
  )
}
  else if(this.userModel.mode=="student"){
  url=studenturl
  var postData={
    "email": this.userModel.name,
    "password": this.userModel.pswd
  }
  this.http.post(url,postData).subscribe(
    (response) => {  
          console.log("added")
          this.router.navigate(['/jobslist'])
    },
    (error) => {   
     // error.error.detail
   console.log(error)
    }
  )}
  }
}
