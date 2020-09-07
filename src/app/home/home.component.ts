import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movieslist;
  constructor(private d:DataService) { }
  ngOnInit(): void {
    
      this.applyFilter({});
  }
  applyFilter(filter){
    console.log(JSON.stringify(filter));
    this.d.filterdata(filter).subscribe( (res) => {
      this.movieslist = res;
    });
  }
}