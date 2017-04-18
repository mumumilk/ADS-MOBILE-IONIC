import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SQLStorage } from '../../providers/sql-storage';

/*
  Generated class for the Activity page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html'
})
export class ActivityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public db : SQLStorage) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityPage');
  }

}
