import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlansProvider } from '../../providers/plans/plans';
import { FoodDetailsPage } from '../food-details/food-details';

@Component({
  selector: 'page-foods',
  templateUrl: 'foods.html',
})
export class FoodsPage {
  plan: object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public plansProvider: PlansProvider) {
    this.plan = plansProvider.plans[0];
  }

  itemSelected(selection) {
    this.navCtrl.push(FoodDetailsPage, { selection });
  }

}
