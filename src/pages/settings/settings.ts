import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  plans: Array<object>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.plans = [];

    const planB = {
      name: 'Plan B',
      calories: '1,500 - 1,799',
      containers: [{
        label: 'Vegetables',
        color: 'green',
        quantity: 4,
      }, {
        label: 'Fruits',
        color: 'purple',
        quantity: 3,
      }, {
        label: 'Proteins',
        color: 'red',
        quantity: 4,
      }, {
        label: 'Carbohydrates',
        color: 'yellow',
        quantity: 3,
      }, {
        label: 'Healthy Fats',
        color: 'blue',
        quantity: 1,
      }, {
        label: 'Seeds and Dressings',
        color: 'orange',
        quantity: 1,
      }, {
        label: 'Oils & Nut Butters',
        color: 'gray',
        quantity: 4,
      }],
    };

    this.plans.push(planB);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
