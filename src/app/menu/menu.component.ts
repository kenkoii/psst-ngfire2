import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private isLoggedIn: any;
  private formMessage: string;
  private chatDrawer: Boolean = false;
  items: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire) {
    this.af.auth.subscribe(auth => {this.isLoggedIn = auth; console.log(auth)});
    this.items = af.database.list('https://testing-a7506.firebaseio.com/data/messages', {
      query: {
        limitToLast: 5,
        orderByKey: true
      }
    });
  }
  //console.log(auth)
  ngOnInit() {
  }

  submitMessage(){
    console.log("submit!!");
    this.items.push({
      user: this.isLoggedIn.auth.displayName,
      message: this.formMessage
    });
    this.formMessage = '';
  }

  login(){
    this.af.auth.login();
  }

  logout(){
    this.af.auth.logout();
  }

}
