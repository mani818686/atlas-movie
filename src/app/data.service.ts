import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) {
   }
public countMap=new Map();
public count:number=0;
public display:boolean=false;
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
      return this.http.get('https://angular--practice.herokuapp.com/api/movies'+str);
  }
addcart(title)
{
if(this.countMap.has(title))
{
  this.countMap.set(title,this.countMap.get(title)+1);
}
else
{
  this.countMap.set(title,1);
}
this.count+=1;
}
get getcart()
{
  return this.countMap;
}

}
