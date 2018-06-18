import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class PlansProvider {
  plans: Array<object>;

  constructor(public storage: Storage) {
    this.plans = [];

    const planB = {
      name: 'Plan B',
      calories: '1,500 - 1,799',
      selected: false,
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
    this.storage.get('selectedPlanName')
      .then((selectedPlanName) => {
        this.setSelectedProperty(selectedPlanName);
      })
  }

  get selectedPlan(): any {
    return this.plans.find((plan) => plan.selected === true);
  }

  setSelectedPlan(planName) {
    this.storage.set('selectedPlanName', planName);
    this.setSelectedProperty(planName);
  }

  setSelectedProperty(planName) {
    const selectedPlan = this.plans.find((plan) => plan.name === planName);
    if (selectedPlan) {
      selectedPlan.selected = true;
    }
  }

}
