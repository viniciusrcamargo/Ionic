import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditaUsuarioPage } from './edita-usuario';

@NgModule({
  declarations: [
    EditaUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(EditaUsuarioPage),
  ],
})
export class EditaUsuarioPageModule {}
