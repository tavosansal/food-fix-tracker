import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlansProvider } from '../../providers/plans/plans';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  plans: Array<object>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public plansProvider: PlansProvider) {
    this.plans = plansProvider.plans;
  }

  choosePlan(planName) {
    this.plansProvider.setSelectedPlan(planName);
  }

}
