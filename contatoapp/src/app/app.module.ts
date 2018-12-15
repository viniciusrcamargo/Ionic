import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { ListaPage } from '../pages/lista/lista';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { EditaPage } from '../pages/edita/edita';
import { LoginPage } from '../pages/login/login';
import { Camera } from '@ionic-native/camera';


const config = {
  apiKey: "AIzaSyCT1vvT6A94XJi8QjRMJF_bx2UoBPRyxHw",
  authDomain: "contatosfirebase-4bcfb.firebaseapp.com",
  databaseURL: "https://contatosfirebase-4bcfb.firebaseio.com",
  projectId: "contatosfirebase-4bcfb",
  storageBucket: "contatosfirebase-4bcfb.appspot.com",
  messagingSenderId: "157051169920"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage,
    ListaPage,
    EditaPage,
    LoginPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage,
    ListaPage,
    EditaPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}
