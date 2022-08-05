import { Component, OnInit } from '@angular/core';
import {LocationService} from "../../shared/services/location.service";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {
  locationResponse$ = this.locationService.getLocations();
  constructor(private locationService: LocationService) { }

}
