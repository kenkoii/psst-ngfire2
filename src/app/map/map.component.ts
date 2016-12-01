import { Component, OnInit } from '@angular/core';
import { SebmGoogleMap } from 'angular2-google-maps/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


class Marker{
  type: string;
  title: string;
  description: string;
  user: string;
  lat: Number;
  lng: Number;
  constructor(){
    this.type = '';
    this.title = '';
    this.description = '';
    this.user = '';
    this.lat = 0;
    this.lng = 0;
  }
}


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  marker = new Marker();

  items: FirebaseListObservable<any[]>;
  isLoggedIn: any;
  isOpen: Boolean;
  constructor(af: AngularFire) {
    this.items = af.database.list('https://testing-a7506.firebaseio.com/data/markers');
    af.auth.subscribe(auth => {this.isLoggedIn = auth; console.log(auth)});
  }

  mapClicked($event: MouseEvent) {
    console.log("Hello");
    if(this.isLoggedIn){
      this.marker.lat = $event.coords.lat;
      this.marker.lng = $event.coords.lng;
      this.openModal()
    }else{
        console.log("Not logged in");
    }
  }

  submitData(){
    console.log(this.marker.type);
      this.items.push({
        type: this.marker.type,
        title: this.marker.title,
        description: this.marker.description,
        user: this.isLoggedIn.auth.displayName,
        lat: this.marker.lat,
        lng: this.marker.lng
      });
      this.openModal();
  }

  openModal(){
    this.clearForm();
    this.isOpen = !this.isOpen;
  }

  getIcon(type){
    return "assets/icons/"+type+".png";
  }

  clearForm(){
    this.marker.type = '';
    this.marker.title = '';
    this.marker.description = '';
    this.marker.user = '';
  }

  ngOnInit() {
  }



}

//[(ngModel)]="marker.type"
