import { NgModule } from '@angular/core';
import { GroupTrackerComponent } from './group-tracker/group-tracker';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [GroupTrackerComponent],
  imports: [CommonModule, IonicModule],
	exports: [GroupTrackerComponent]
})
export class ComponentsModule {}
