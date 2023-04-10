import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ FlightService } from './../api/services/flight.service';
import { FlightRm } from '../api/models';


@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})


export class BookFlightComponent implements OnInit {

  constructor(private route: ActivatedRoute, private flightService: FlightService) { }

  flightId: string = 'Not Loaded';

  flight: FlightRm={};

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => this.findFlight(p.get("flightId")));
  }

  private findFlight = (flightId: string | null) => {
    this.flightId = flightId ?? 'not passed';

    this.flightService.findFlight({ id: this.flightId })
      .subscribe(flight => this.flight = flight);
  }
}
