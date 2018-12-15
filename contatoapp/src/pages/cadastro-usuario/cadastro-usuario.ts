import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Camera, CameraOptions, EncodingType, PictureSourceType, DestinationType } from '@ionic-native/camera';
import { AngularFireStorage } from '@angular/fire/storage';
import { UploadMetadata } from '@angular/fire/storage/interfaces';

@IonicPage()
@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html',
})
export class CadastroUsuarioPage {

  public imagem;
  private imageData;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth,
              public camera : Camera, public storage: AngularFireStorage, public loading: LoadingController) {
  }

  public salvar(form: NgForm){

    let nome = form.value.nome;
    let email = form.value.email;
    let senha = form.value.senha;

    let config : UploadMetadata = {
      contentType: 'image/jpeg'
    }

    let _loading = this.loading.create({content: 'Carregando'});
    _loading.present();

    this.storage.ref('fotos/usuario.jpeg')
      .putString(this.imageData, 'base64', config).then((file) => {

        this.afAuth.auth.createUserWithEmailAndPassword(email, senha)
        .then((result) => {
          result.user.updateProfile({
            displayName: nome,
            photoURL: file.downloadURL
          }).then(() => {
            _loading.dismiss();
          });
        })
        .catch((error) => {
          _loading.dismiss();
          alert(error);
        });

      })
    .catch((error) => {
      _loading.dismiss();
      alert(JSON.stringify(error));
    })



  }

  public foto() {

    const config : CameraOptions = {
      quality: 10,
      allowEdit: false,
      targetWidth: 50,
      targetHeight: 50,
      encodingType: EncodingType.JPEG,
      correctOrientation: true,
      saveToPhotoAlbum: true,
      sourceType: PictureSourceType.CAMERA,
      destinationType: DestinationType.DATA_URL
    }

    this.camera.getPicture(config)
      .then((imageData) => {
        this.imageData = imageData;
        this.imagem = 'data:image/jpeg;base64,' + imageData;
      })
      .catch((error) => {
        alert(error);
      })
  }

  }
