import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { MenuPage} from '../pages/menu/menu';

import { TabsPage } from  '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { DisciplinePage } from '../pages/discipline/discipline';
import { TaskPage } from '../pages/task/task';
import { UnoPage } from '../pages/uno/uno';

import { Tabs2Page } from '../pages/tabs2/tabs2';
import { NetworkPage } from '../pages/network/network';
import { ModalNetworkPage } from '../pages/modal-network/modal-network';

import { ActivityPage } from '../pages/activity/activity';
import { ModalActivityPage } from '../pages/modal-activity/modal-activity';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = MenuPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
