import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Users } from "../model/users";
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private instancia: ActionSheetController, 
    private alert: AlertController,
    private toastController: ToastController) { }

  users: Users[] = [];

  ngOnInit(){
    this.users.push({title: 'Youichi', subtitle: 'Quaterback', description: 'Devil Bats Captain', avatar:'https://i.pinimg.com/originals/d5/e9/13/d5e9130a1b49c5b9846e3a00358360cb.jpg'});
    this.users.push({title: 'Kurita', subtitle: 'Defense Takle', description: 'Devil Bats Co-founder', avatar:'https://vignette.wikia.nocookie.net/eyeshield21/images/c/c1/Kurita.jpg/revision/latest?cb=20120519203517&path-prefix=es'})
  };

  async userSelected(user: Users){
    let toast = await this.toastController.create({
      header: 'Se ha elegido a ' + user.title,
      message: 'Es ' + user.description,
      position: 'bottom',
      buttons: [{
        handler: ()=>{
          console.log('se ha eliminado el usuario');
          this.users.pop();
        },
        text: 'Eliminar',
        icon: 'trash'
      }]
    });
    toast.present();
  };

  async confirmarBorrado() {
    const element = await this.alert.create({
      header: 'en realidad quiere eliminar este elemnto?',
      message: 'esta accion no se puede deshacer, esta seguro?',
      buttons: [{
        text: 'Confirmar',
        handler: () => {
          console.log('se confirmo la accion');
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('se cancelo la accion');
        }
      }]
    });
    element.present();
  };

  async mostrarHoja() {
    const sheet = await this.instancia.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
          this.confirmarBorrado();   // confirmarBorrado();
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    sheet.present();
  }

}
