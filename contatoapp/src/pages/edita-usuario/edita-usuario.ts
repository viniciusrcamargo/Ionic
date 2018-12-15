import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the EditaUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edita-usuario',
  templateUrl: 'edita-usuario.html',
})
export class EditaUsuarioPage {

  public contato: any = {};
  public nome: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth:  AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditaUsuarioPage');
  }

  ionViewDidEnter(){
    this.nome = this.afAuth.auth.currentUser.displayName;
  }

  public salvar(form: NgForm){
    this.afAuth.auth.currentUser.updateProfile({displayName: form.value.nome, photoURL: ''}).then(() =>{
      this.navCtrl.pop();
    }).catch((error) => {
      alert(error);
    })
  }

}
