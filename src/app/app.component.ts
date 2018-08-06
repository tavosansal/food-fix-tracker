import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { FoodsPage } from '../pages/foods/foods';
import { AboutPage } from '../pages/about/about';
import { PlansProvider } from '../providers/plans/plans';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav: NavController

  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController, public plansProvider: PlansProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openSettings() {
    this.nav.push(SettingsPage);
    this.closeMenu();
  }

  openFood() {
    this.nav.push(FoodsPage);
    this.closeMenu();
  }

  openAbout() {
    this.nav.push(AboutPage);
    this.closeMenu();
  }

  closeMenu() {
    this.menuCtrl.close();
  }
}

