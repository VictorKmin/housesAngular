import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  @Input() house: any;
  city: any;
  price: any;
  room_count;

  constructor() {
  }

  ngOnInit() {
    console.log(this.house);

    this.city = this.house.city;
    this.price = this.house.price;
    this.room_count = this.house.room_count;
  }

}
