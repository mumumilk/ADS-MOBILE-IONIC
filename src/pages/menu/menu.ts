import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';


import { TabsPage } from '../tabs/tabs';
import { Tabs2Page } from '../tabs2/tabs2';
import { ActivityPage } from '../activity/activity';
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
  public actualPage = Tabs2Page;
  public lista1 = TabsPage;
  public lista2 = Tabs2Page;
  public lista3 = ActivityPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  openPage(page){
    this.actualPage = page;
  }
}
