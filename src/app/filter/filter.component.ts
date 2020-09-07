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
  ngOnInit(): void {
  }
  applyFilter()
  {
    this.filterChange.emit(this.filterData);
  }

}
