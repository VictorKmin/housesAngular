import {Component, OnInit} from '@angular/core';
import {HouseService} from '../services/house.service';
import {Response} from '../Response';

@Component({
  selector: 'app-all-house',
  templateUrl: './all-house.component.html',
  styleUrls: ['./all-house.component.css']
})
export class AllHouseComponent implements OnInit {

  houses: any;

  constructor(public houserService: HouseService) {
  }

  ngOnInit() {
    this.houserService.getAllHouses().subscribe((housesFromNode: Response) => {
      console.log(housesFromNode);
      this.houses = housesFromNode.message;
    });
  }

}
