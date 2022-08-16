import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task_FE_Technopolitan';
   header: { key: string, value: any ,dataType?:any}[] = [
    { "key": "Full Name", "value": "name" },
    { "key": "Faculty", "value": "faculty" },
    { "key": "Birth Of Date", "value": "BOD" ,"dataType":"Date"}
];

  persons=[
    {
      "name":'heba',
      "faculty":'Computer Science IS',
      "BOD":new Date(),
    },
    {
      "name":'amira',
      "faculty":'Computer Science CS',
      "BOD":new Date(),
    }
  ]
}
