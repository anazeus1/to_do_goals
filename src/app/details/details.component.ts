import { Component,inject } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HousingService} from "../housing.service";
import {HousingLocation} from "../housing-location";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route:ActivatedRoute=inject(ActivatedRoute);
  housingLocation:HousingLocation|undefined;
  housingService:HousingService=inject(HousingService);
  constructor() {
      this.housingLocation=this.housingService.getHousingLocationbyId(Number(this.route.snapshot.params['id']));
    }

}
