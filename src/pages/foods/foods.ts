import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlansProvider } from '../../providers/plans/plans';
import { FoodDetailsPage } from '../food-details/food-details';

/**
 * Generated class for the FoodsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
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
