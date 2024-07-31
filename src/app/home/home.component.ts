import {Component, inject} from '@angular/core';
import {HousingLocationComponent} from "../housing-location/housing-location.component";
import {NgForOf} from "@angular/common";
import {HousingService} from "../housing.service";
import {HousingLocation} from "../housing-location";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HousingLocationComponent,
    NgForOf
  ],
  templateUrl:"./home.component.html"
 ,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingService:HousingService=inject(HousingService);
  housingLocationList:HousingLocation[]=[];
  searchControl=new FormControl("");
  title: string ="";

  searchHousing(){
    this.title=this.searchControl.value??"";
    console.log(this.searchControl.value?.toString()??"ssss")
  }
  constructor() {
    this.housingLocationList=this.housingService.getAllHousingLocations();
  }

}
