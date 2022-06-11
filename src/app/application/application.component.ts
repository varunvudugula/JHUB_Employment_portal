import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  constructor() { }
  applicants:any=[
    {
      "name":"varun",
      "email":"vudugulavarun@gmail.com",
      "college":"JntuhUceh",
      "Cgpa":"8.7",
      "profileMatch":"70%"

  },
  {
    "name":"Pranitha",
      "email":"pranithaavire@gmail.com",
      "college":"IIT-HYD",
      "Cgpa":"9.5",
      "profileMatch":"95%"

  },
  {
    "name":"Aryan",
      "email":"aryankarnati@gmail.com",
      "college":"OU",
      "Cgpa":"9.8",
      "profileMatch":"96%"
  }
]
  
  
  ngOnInit(): void {
  }

}
