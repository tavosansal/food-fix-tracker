import { Component, Input } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PlansProvider } from '../../providers/plans/plans';

@Component({
  selector: 'group-tracker',
  templateUrl: 'group-tracker.html'
})
export class GroupTrackerComponent {

  @Input() foodType: string;
  @Input() foodColor: string;
  total: number;
  selectedPlan: object;

  constructor(private storage: Storage, public plansProvider: PlansProvider) {
    this.plansProvider = plansProvider;
  }

  get containerTotal() {
    return this.plansProvider.selectedPlan.containers.find((container) => container.label === this.foodType).quantity;
  }

  // get disableAdd() {
  //   return this.total === this.containerTotal;
  // }

  ngOnInit() {
    this.storage.get(this.foodType)
      .then((storedTotal) => {
        if (storedTotal) {
          this.total = storedTotal;
        } else {
          this.total = this.containerTotal;
        }
      });
  }

  add() {
    this.total += 0.25;
    this.saveValue();
  }

  remove() {
    if (this.total > 0) {
      this.total -= 0.25;
    } else {
      this.total = 0;
    }
    this.saveValue();
  }

  saveValue() {
    this.storage.set(this.foodType, this.total);
  }

}
