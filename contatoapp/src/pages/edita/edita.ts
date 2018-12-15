import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'page-edita',
  templateUrl: 'edita.html',
})
export class EditaPage {

  private id: string;
  public contato: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFirestore) {
     this.id = navParams.get('id');
  }

  ionViewDidEnter(){
    let sub = this.db.collection('contatos').doc(this.id).valueChanges().subscribe((contato) => {
      this.contato = contato;
      sub.unsubscribe();})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditaPage');
  }

  public salvar(form : NgForm){
    let c = {
      nome:  form.value.nome,
      email: form.value.email
    }
    this.db.collection('contatos').doc(this.id).update(c).then(() => {
      this.navCtrl.pop();
    })
  }
}
