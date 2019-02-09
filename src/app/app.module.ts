import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AllHouseComponent} from './all-house/all-house.component';
import {HouseComponent} from './house/house.component';
import {AddHouseComponent} from './add-house/add-house.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import {HouseService} from './services/house.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AllHouseComponent,
    HouseComponent,
    AddHouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    HouseService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
