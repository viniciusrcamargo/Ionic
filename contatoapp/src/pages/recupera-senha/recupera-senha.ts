import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the RecuperaSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recupera-senha',
  templateUrl: 'recupera-senha.html',
})
export class RecuperaSenhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth : AngularFireAuth ) {
  }

  public recuperar(form: NgForm){
    let email = form.value.email;

    this.afAuth.auth.sendPasswordResetEmail(email);
    this.navCtrl.pop();
  }

  

}
