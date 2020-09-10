import { DataService } from './../data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  @Input() movies;
  constructor(private d:DataService) { }
  ngOnInit(): void {}
  addToCart(title)
  {
      this.d.addcart(title);
  }
}
