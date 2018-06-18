import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  planSelected: boolean;

  constructor(public navCtrl: NavController, private storage: Storage, public alertCtrl: AlertController) {

  }

  ionViewDidEnter() {
    this.storage.get('selectedPlanName')
      .then((selectedPlanName) => {
        this.planSelected = selectedPlanName;
      });
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
            this.storage.forEach((val, key) => {
              if (key !== 'selectedPlanName') {
                this.storage.remove(key);
              }
            })
            location.reload();
          }
        }
      ]
    });
    confirm.present();
  }

}
