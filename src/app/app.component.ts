import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //zoom level 

  zoom: number = 10;

  //start position
  lat: number = 51.678418;
  lng: number = 7.809007;

  markers: marker[] = [
    {
      name: 'Accenture Innovation Center', 
      lat: 29.7535,
      lng: 95.3657, 
      draggable: true
    },
    {
      name: 'Accenture 2', 
      lat: 29.7435,
      lng: 96.3657, 
      draggable: true
    },
    {
      name: 'Accenture 3', 
      lat: 29.7268,
      lng: 95.5657, 
      draggable: true
    },
  ]

  constructor() {

  }
}

interface marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}

