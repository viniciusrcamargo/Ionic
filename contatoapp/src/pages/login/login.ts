import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth) {
  }

  public login(form: NgForm){
    let email = form.value.email;
    let senha = form.value.senha;

    this.afAuth.auth.signInWithEmailAndPassword(email, senha).then((result) => {
      alert(result.user.uid);
    }).catch((error) => {
      alert(error);
    })
  }

  public registrar(){
   this.navCtrl.push('CadastroUsuarioPage'); 
  }

  public recuperar(){
    this.navCtrl.push('RecuperaSenhaPage');
  }
}
