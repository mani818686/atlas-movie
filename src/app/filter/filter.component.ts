
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  genreOptions = ["Drama","Romance", "Horror", "Action"];

  filterData = {year:1920, genres:[]};
  @Output() filterChange = new EventEmitter();
  constructor() { }
  display;
  count;
  ngOnInit(): void {
    this.display="none";
  }
  dis()
  {
    this.display="none";
    console.log(new Date()+this.display);
  }
  applyFilter()
  {
    this.display="inline-block";
    this.filterChange.emit(this.filterData);
    setTimeout(this.dis,2000);
    console.log(new Date()+this.display);
  }

}
