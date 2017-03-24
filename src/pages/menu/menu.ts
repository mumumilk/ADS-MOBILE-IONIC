import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { DisciplinePage } from '../discipline/discipline';
import { TabsPage } from '../tabs/tabs';

/*
  Generated class for the Menu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  public actualPage = TabsPage;
  public login = LoginPage;
  public discipline = DisciplinePage;
  public lista1 = TabsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  openPage(page){
    this.actualPage = page;
  }
}
