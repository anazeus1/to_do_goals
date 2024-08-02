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
  filteredLocationList:HousingLocation[]=[];
  searchControl=new FormControl("");
  title: string ="";

  searchHousing(){
    this.title=this.searchControl.value??"";
    console.log(this.searchControl.value?.toString()??"")
  }
  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocations:HousingLocation[])=>{
      this.housingLocationList=housingLocations;
      this.filteredLocationList=housingLocations;
    });
  }
  filterResults(text:string){
    debugger
    if(!text) this.filteredLocationList=this.housingLocationList;
    else{
      this.filteredLocationList=this.housingLocationList.filter((housingLocation)=>
      {

        return housingLocation?.name.toLowerCase().includes(text.toLowerCase());
      })
    }

  }

}
