import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Md5 } from 'ts-md5/dist/md5';

/*
  Generated class for the HeroService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HeroService {
  data: any;
  constructor(public http: Http) {
    console.log('Hello HeroService');
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }


    return new Promise(resolve => {

      let md5 = new Md5();
      
      var timestamp = Number(new Date());
      var hash = Md5.hashStr(timestamp + 'e47d21b69f7dff75034e3788aa65c2bab81325d3d2d3b34b6a41839fecf65017371a865d');

      this.http.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&orderBy=name&limit=6510&apikey=2d3b34b6a41839fecf65017371a865d&hash=${hash}`)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

}