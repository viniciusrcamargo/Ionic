import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Contato } from '../../models/Contato';
import { ContatoProvider } from '../../providers/contato/contato';


@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  constructor(public navCtrl: NavController, private pContato: ContatoProvider) {
    
  }

  public salvar(form: NgForm): void{
    let nome = form.value.nome; //ion-input name="nome"...
    let email = form.value.email;

    let c: Contato = new Contato();
    c.nome = nome;
    c.email = email;
    c.id = new Date().getTime();

    this.pContato.create(c);

    this.navCtrl.pop();
  }

}
