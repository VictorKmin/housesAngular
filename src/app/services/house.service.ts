import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hosts} from '../Hosts';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(public http: HttpClient) {
  }


  getAllHouses() {
    return this.http.get(`${Hosts.API_HOST}/house`);
  }
}
