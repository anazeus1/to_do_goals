import { Component,inject } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HousingService} from "../housing.service";
import {HousingLocation} from "../housing-location";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    ReactiveFormsModule,

  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route:ActivatedRoute=inject(ActivatedRoute);
  housingLocation:HousingLocation|undefined;
  housingService:HousingService=inject(HousingService);
  applyForm=new FormGroup({
    firstname:new FormControl(""),
    lastname:new FormControl(""),
  });


  constructor() {
      let id = Number(this.route.snapshot.params['id']);
      this.housingService.getHousingLocationById(id).then((housingLocation)=>{
        this.housingLocation=housingLocation;
        debugger
      });


    }

    submitApplication(){
      this.housingService.submitApplication(
        this.applyForm.value.firstname??"",
        this.applyForm.value.lastname??"",
      )
    }

}
