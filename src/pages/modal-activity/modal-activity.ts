import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Activity, Type, ActivityPage } from '../activity/activity';
import { SQLStorage } from '../../providers/sql-storage';

/*
  Generated class for the ModalActivity page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-activity',
  templateUrl: 'modal-activity.html'
})
export class ModalActivityPage {
  public activity : Activity;

  constructor(public view: ViewController, public navParams: NavParams, public db : SQLStorage) {
      this.activity = this.navParams.get('activity');
  }

  public close(){
    this.view.dismiss();
  }

  public save(){
    this.view.dismiss(this.activity);
    //console.log(this.activity);
  }

}
