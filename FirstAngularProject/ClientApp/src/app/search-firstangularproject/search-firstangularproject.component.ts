import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { FlightService } from './../api/services/flight.service';
import { FlightRm } from '../api/models';

@Component({
  selector: 'app-search-firstangularproject',
  templateUrl: './search-firstangularproject.component.html',
  styleUrls: ['./search-firstangularproject.component.css']
})
export class SearchFirstangularprojectComponent {

  searchResult: FlightRm[] = [];

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {

  }

  search() {
    this.flightService.searchFlight({}).subscribe(response => this.searchResult = ((response) as any),
      this.handleError);
  }

  private handleError(error: any) {
    console.log("Response Error. Status:", error.status);
    console.log("Response Error. Status Text:", error.statusText);
    console.log(error);
  }
}
