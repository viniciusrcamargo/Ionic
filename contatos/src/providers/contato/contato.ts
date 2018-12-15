import { Injectable } from '@angular/core';
import {Contato} from '../../models/Contato';
import { NativeStorage } from '@ionic-native/native-storage';
import { Ion } from 'ionic-angular';

@Injectable()
export class ContatoProvider {

  public contatos: Array<any> = [];

  constructor(private storage: NativeStorage){
    storage.getItem('contatos').then((lista) => {
      this.contatos = JSON.parse(lista);
    });
  }

  public create(c: Contato): void{
    this.contatos.push(c);
  }

  private commit(): void{
    this.storage.setItem('contatos', JSON.stringify(this.contatos));
  }

  public read(): Array<Contato>{
    return this.contatos;
  }

  public update(c: Contato): void{

  }

  public delete(id: number): void{
    
  }
 
 
}
