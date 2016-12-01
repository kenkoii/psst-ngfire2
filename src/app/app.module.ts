import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MapComponent } from './map/map.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDdOFLMpJvyMz4eyUCnUjBBYH-kSxBOwT0",
    authDomain: "testing-a7506.firebaseapp.com",
    databaseURL: "https://testing-a7506.firebaseio.com",
    storageBucket: "testing-a7506.appspot.com"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBAe8thTIIikNvgLp7DDLNK0OeFOUyLf9o'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
