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

    const planA = {
      name: 'Plan A',
      calories: '1,200 - 1,499',
      selected: false,
      containers: [{
        label: 'Vegetables',
        color: 'green',
        quantity: 4,
      }, {
        label: 'Fruits',
        color: 'purple',
        quantity: 2,
      }, {
        label: 'Proteins',
        color: 'red',
        quantity: 4,
      }, {
        label: 'Carbohydrates',
        color: 'yellow',
        quantity: 2,
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
        quantity: 3,
      }],
    };

    this.plans.push(planA, planB);
    this.storage.get('selectedPlanName')
      .then((selectedPlanName) => {
        this.setSelectedProperty(selectedPlanName);
      })
  }

  get selectedPlan(): any {
    return this.plans.find((plan: any) => plan.selected === true);
  }

  setSelectedPlan(planName) {
    this.storage.set('selectedPlanName', planName);
    this.setSelectedProperty(planName);
  }

  setSelectedProperty(planName) {
    this.plans.forEach((plan: any) => plan.selected = false);
    const selectedPlan: any = this.plans.find((plan: any) => plan.name === planName);
    if (selectedPlan) {
      selectedPlan.selected = true;
    }
  }

}
