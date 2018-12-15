import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/enviroment';
import { CadastroPage } from '../cadastro/cadastro';
import { isObject } from 'util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pessoas = [];
  ref = firebase.database().ref('pessoas/');
  
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    this.ref.on('value', resp => {
      this.pessoas = snapshotToArray(resp);
    });
  }

  

  async delPessoa(key){
    if(key !== undefined && key !== null){
      firebase.database().ref('pessoas/' + key).remove();
    }
  }

 editPessoa(key){
   let ref = firebase.database().ref('pessoas/'+ key);
   ref.once('value', resp => {

    let alert = this.alertCtrl.create({
      title: 'Editar',
      inputs: [{
        name: 'name',
        placeholder: 'Nome',
        value: resp.val().name
       },{
        name: 'email',
        placeholder: 'E-mail',
        value: resp.val().email
       },{
        name: 'telefone',
        placeholder: 'Telefone',
        value: resp.val().telefone
       },{
        name: 'endereco',
        placeholder: 'Endereço',
        value: resp.val().endereco
       }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Edit',
          handler: data=>{
            if(data.name !== undefined && data.name.length > 0){
              firebase.database().ref('pessoas/'+key).update({name:data.name, email:data.email, telefone:data.telefone, endereco:data.endereco});
            }
          }
        }
      ]
    });
    alert.present();
  });
  
 }

 abrirTela(){
  this.navCtrl.push(CadastroPage);
}
}
