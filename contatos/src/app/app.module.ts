import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContatoProvider } from '../providers/contato/contato';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { FormsModule } from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage'; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContatoProvider,
   NativeStorage
  ]
})
export class AppModule {}
