import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EditaPage } from '../edita/edita';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  public contatos : Observable<any[]>;
  public nome : string;

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public db : AngularFirestore, public afAuth: AngularFireAuth) {
    let uid = afAuth.auth.currentUser.uid;
    this.contatos = db.collection('contatos', ref => ref.where('uid', '==', uid)).valueChanges();
    this.nome = afAuth.auth.currentUser.displayName;
  }

public adicionar():void {
  this.navCtrl.push(CadastroPage);
}

public apagar(id: string){
  this.db.collection('contatos').doc(id).delete();
}

public sair(){
  this.afAuth.auth.signOut();
}

public editar(id: string){
  this.navCtrl.push(EditaPage, {id: id});
}

}
