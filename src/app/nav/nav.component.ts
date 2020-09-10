import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public ds:DataService) { }
  ngOnInit(): void {
  }


}
