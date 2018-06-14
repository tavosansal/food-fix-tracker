import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private storage: Storage, public alertCtrl: AlertController) {

  }

  refresh() {
    const confirm = this.alertCtrl.create({
      title: 'Reset?',
      message: 'Do you want to reset all values and start over?',
      buttons: [
        {
          text: 'No',
          handler: () => {

          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.storage.clear();
            location.reload();
          }
        }
      ]
    });
    confirm.present();
  }

}
