import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApplicationComponent } from '../application/application.component';
import { GeneralService } from '../general.service';
import { JobDescriptionComponent } from '../job-description/job-description.component';

@Component({
  selector: 'app-jobslist',
  templateUrl: './jobslist.component.html',
  styleUrls: ['./jobslist.component.css']
})
export class JobslistComponent implements OnInit {
jobs:any=[]
  recruiter!: boolean;
  student!: boolean;
  constructor(public http:HttpClient,public dialog: MatDialog,public gen:GeneralService,public router:Router) { }

  ngOnInit(): void {
    console.log(this.gen.getModer())
    this.jobslist()
    var s=this.gen.getModer()
    if(s=="recruiter"){
    this.recruiter=true
    this.student=false
  }
    if(s=="student"){
    this.student=true
    this.recruiter=false
  }
  }
  jobslist(){
    var url="http://127.0.0.1:8000/resume_extraction/api/v1/job_list"
    var postdata={
      "organization_name": ""
    }
    this.http.post(url,postdata).subscribe(
      (response) => {  
            console.log("added")
        console.log(response)
        var responseInString=JSON.stringify(response)
        var responseInJSON = JSON.parse(responseInString)
        console.log(responseInJSON)
        var keys=Object.keys(responseInJSON)
        console.log(keys)
        keys.forEach(key=>{
          console.log(responseInJSON[key])
          this.jobs.push(responseInJSON[key])
        })
        console.log(this.jobs[0][0])
      },
      (error) => {   
       // error.error.detail
     console.log(error.error.detail)
      }
    )
  }
  openDialog(){
    
         // console.log(this.del.getConfirmation())
         this.router.navigate(['applicants-list'])
        
  }

  openDialog1(id:number): void {
    this.gen.setjobslist(this.jobs[id])
    console.log(this.gen.getjobslist())
    console.log(this.jobs[id])
    this.gen.setjobid(id);
    console.log(this.gen.getjobid())
    const dialogRef = this.dialog.open(JobDescriptionComponent, {
      width: '900px',
      height:'900px',
      data: { jobs: this.jobs[id]}
    });
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}
