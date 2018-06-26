import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { PlansProvider } from '../../providers/plans/plans';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  plans: Array<object>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public plansProvider: PlansProvider, public storage: Storage, public alertCtrl: AlertController) {
    this.plans = plansProvider.plans;
  }

  async choosePlan(planName) {
    const selectedPlan = await this.storage.get('selectedPlanName');
    if (selectedPlan) {
      const confirm = this.alertCtrl.create({
        title: `Override ${selectedPlan}?`,
        message: 'You already have another plan selected. Would you like to change it?',
        buttons: [
          {
            text: 'No',
          },
          {
            text: 'Yes',
            handler: () => {
              this.plansProvider.setSelectedPlan(planName);
            }
          }
        ]
      });
      confirm.present();
    } else {
      this.plansProvider.setSelectedPlan(planName);
    }
  }

}
