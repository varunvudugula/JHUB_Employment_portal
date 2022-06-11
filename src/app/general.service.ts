import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
mode=""
jobid=0
jobslist=[]
  constructor() { }
  setModer(s:string){
    this.mode=s
  }
  getModer(){
    return this.mode
  }
  setjobid(id:number){
    this.jobid=id;
  }
  getjobid()
  {
    return this.jobid;
  }
  setjobslist(jobs:[]){
    this.jobslist=jobs;
  }
  getjobslist()
  {
    this.jobslist;
  }
}
