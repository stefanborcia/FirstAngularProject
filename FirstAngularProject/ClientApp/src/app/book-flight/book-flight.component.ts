import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{ FlightService } from './../api/services/flight.service';
import { FlightRm } from '../api/models';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})


export class BookFlightComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private flightService: FlightService) { }
  
  flightId: string = 'Not Loaded';

  flight: FlightRm={};

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => this.findFlight(p.get("flightId")));
  }

  private findFlight = (flightId: string | null) => {
    this.flightId = flightId ?? 'not passed';

    this.flightService.findFlight({ id: this.flightId })
      .subscribe(flight => this.flight = flight, this.handleError);
  }

  private handleError = (error: any) => {
    if (error.status == 404) {
      alert("Flight not found!")
      this.router.navigate(['/search-flights']);
    }
    console.log("Response Error. Status:", error.status);
    console.log("Response Error. Status Text:", error.statusText);
    console.log(error);
  }
}
