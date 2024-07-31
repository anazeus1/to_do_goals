import { Injectable } from '@angular/core';
import {HousingLocation} from "./housing-location";

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList:HousingLocation[]=[
    {
      "id":1,
      "name":"Nasr",
      "photo":"./assets/nasr.jpeg"},
    {
      "id":2,
      "name":"Meitnerweg",
      "photo":"./assets/meitnerweg.jpeg"},
    {
      "id":3,
      "name":"Bali",
      "photo":"./assets/bali.jpeg"
    },
    {
      "id":4,
      "name":"Malaysia",
      "photo":"./assets/malaysia.jpeg"},
    {
      "id":5,
      "name":"ankara",
      "photo":"./assets/nasr.jpeg"}
  ];



  constructor() { }
  getAllHousingLocations():HousingLocation[]{
    return  this.housingLocationList;}

  getHousingLocationbyId(id:Number):HousingLocation|undefined{
    return this.housingLocationList.find(housinglocation=>housinglocation.id===id);
  }

  submitApplication(firstName:string,lastName:string){
    console.log(firstName,lastName);

  }
}
