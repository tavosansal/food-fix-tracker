import { Component, Input } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'group-tracker',
  templateUrl: 'group-tracker.html'
})
export class GroupTrackerComponent {

  @Input() foodType: string;
  @Input() foodColor: string;
  total: number;

  constructor(private storage: Storage) {
  }

  ngOnInit() {
    this.storage.get(this.foodType)
    .then((storedTotal) => {
      if (storedTotal) {
        this.total = storedTotal;
      } else {
        this.total = 0;
      }
    })
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
