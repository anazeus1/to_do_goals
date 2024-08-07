import { Component } from '@angular/core';
import { Activity } from '../activity';
import {NgForOf} from "@angular/common";

import {AddActivityButtonComponent} from "../add-activity-button/add-activity-button.component";
import {ActivityComponent} from "../activity/activity.component";




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AddActivityButtonComponent,
    ActivityComponent,NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    activities:Activity[]=[
      new Activity(1, "GTI", new Date("2012-04-23T18:25:43.511Z"), new Date("2012-04-23T19:25:43.511Z"),
  "string", "red"),new Activity(1, "GTI", new Date("2012-04-23T18:25:43.511Z"), new Date("2012-04-23T18:25:43.511Z"),
        "string", "red"),new Activity(1, "GTI", new Date("2012-04-23T18:25:43.511Z"), new Date("2012-04-23T18:25:43.511Z"),
        "string", "red"),

  ];

}
