import { Injectable } from '@angular/core';
import {HousingLocation} from "./housing-location";

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList:HousingLocation[]=[];
  url="http://localhost:3000/locations";


  constructor() { }
  async getAllHousingLocations():Promise<HousingLocation[]>{

    const data = await fetch(this.url);
    debugger;
    return data.json() ?? [];}

  async getHousingLocationbyId(id:Number):Promise<HousingLocation|undefined>{
    const data=await fetch(`${this.url}/${id}`);

    return await data.json()?? {};
  }

  submitApplication(firstName:string,lastName:string){
    console.log(firstName,lastName);

  }
}
