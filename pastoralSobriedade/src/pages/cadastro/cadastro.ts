import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  ref = firebase.database().ref('pessoas/');
  inputText  : string = '';
  inputText2 : string = '';
  inputText3 : string = '';
  inputText4 : string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addPessoa(pessoa){
    if(pessoa !==undefined && pessoa !== null){
      let newPessoa = this.ref.push();
      newPessoa.set(pessoa);
      this.inputText  = '';
      this.inputText2 = '';
      this.inputText3 = '';
      this.inputText4 = '';
    }
    this.navCtrl.pop();
  }


}
