import { Injectable } from '@angular/core';
import {HousingLocation} from "./housing-location";
import {Debugger} from "node:inspector";

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url="http://localhost:3000/locations";
  protected housingLocationList:HousingLocation[]=[

  ];



  constructor() { }
  async getAllHousingLocations():Promise<HousingLocation[]>{

    const data=await fetch(this.url);
    return await data.json()?? [];
  }

  async getHousingLocationById(id:Number):Promise<HousingLocation|undefined>{
    const data=await fetch("http://localhost:3000/locations?id=1");
    debugger

    return await data.json() ??  {
      "id": 1,
      "name": "Naadddddddddasr",
      "photo": "./assets/nasr.jpeg"
    };
  }

  submitApplication(firstName:string,lastName:string){
    console.log(firstName,lastName);

  }
}
