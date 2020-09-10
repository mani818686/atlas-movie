import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) {
   }
private cartdetails:any[]=[];
public count:number=0;
  filterdata(options?)
  { let str = ""; // query string
  if(options && options.year){
    str += "?year="+options.year;
  }
  if(options && options.genres)
    {
      for(var g in options.genres)
      {
        str+="&&?genre="+options.genres[g];
      }
    }
      return this.http.get('http://localhost:3000/api/movies'+str);
  }
addcart(id)
{
this.cartdetails.push(id);
this.count+=1;
}
get getcart()
{
  return this.cartdetails;
}

}
