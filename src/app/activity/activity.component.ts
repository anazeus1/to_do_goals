import { Component, Input } from '@angular/core';
import { Activity } from '../activity';
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})
export class ActivityComponent {
  @Input() activity!: Activity;


}
