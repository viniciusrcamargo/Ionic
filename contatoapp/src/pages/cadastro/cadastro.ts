import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ValueTransformer } from '@angular/compiler/src/util';
import { NgForm } from '@angular/forms';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFirestore, public afAuth: AngularFireAuth) {
  }

 public salvar(form : NgForm){
    let c = {
      nome : form.value.nome,
      email : form.value.email,
      uid: this.afAuth.auth.currentUser.uid
    };

    this.db.collection('contatos').add(c).then((ref) => {
      this.db.collection('contatos').doc(ref.id).update({id: ref.id});
      this.navCtrl.pop();
    }).catch((erro) => {})
 }

}
