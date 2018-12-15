import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListaPage } from '../pages/lista/lista';
import { LoginPage } from '../pages/login/login';
import { AngularFireAuth }  from '@angular/fire/auth';
 


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null;

  @ViewChild(Nav) nav:Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, afAuth: AngularFireAuth) {
    platform.ready().then(() => {
      afAuth.auth.onAuthStateChanged((user) => {
        if(user != null){
          this.nav.setRoot(ListaPage);
        }else{
          this.nav.setRoot(LoginPage);
        }
      })
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

