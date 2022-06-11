import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GeneralService } from '../general.service';
import { FormControl,FormsModule } from '@angular/forms';
@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent implements OnInit {
  selectedskills = new FormControl();
  constructor(public dialogref: MatDialogRef<JobDescriptionComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:any,private router:Router,private http:HttpClient,private gen:GeneralService) { }

  ngOnInit(): void {
    this.selectedskills=this.data.jobs[6]
    console.log(this.data.jobs[1])
  }

}
