import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LocationApiResponse} from "../models/location.model";

@Injectable({
  providedIn: 'root'
})

export class LocationService {
  constructor(private http: HttpClient) {
  }
  getLocations(): Observable<LocationApiResponse> {
    return this.http.get<LocationApiResponse>('https://rickandmortyapi.com/api/location')
  }
}
