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
  deferredPrompt;

  constructor(public navCtrl: NavController, private storage: Storage, public alertCtrl: AlertController) {

  }

  ionViewWillEnter() {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;

      this.showInstallDialog();
    });
  }

  ionViewDidEnter() {
    this.storage.get('selectedPlanName')
      .then((selectedPlanName) => {
        this.planSelected = selectedPlanName;
      });
  }

  showInstallDialog() {
    const self = this;
    const installDialog = this.alertCtrl.create({
      title: 'Install',
      message: 'Install app to your homescreen?',
      buttons: [
        {
          text: 'No',
        },
        {
          text: 'Yes',
          handler() {
            self.deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            self.deferredPrompt.userChoice
              .then((choiceResult) => {
                self.deferredPrompt = null;
              });
          }
        }
      ]
    });

    installDialog.present();
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
