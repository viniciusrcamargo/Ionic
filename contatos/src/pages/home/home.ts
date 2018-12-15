import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContatoProvider } from '../../providers/contato/contato';
import { Contato } from '../../models/contato';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private contatos: Array<Contato>;

  constructor(public navCtrl: NavController, private pContato: ContatoProvider) {
    this.contatos = pContato.read();
  }

  public adicionar(): void{
   this.navCtrl.push(CadastroPage); 
  }

}