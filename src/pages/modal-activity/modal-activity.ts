import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Activity } from '../activity/activity';

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

  constructor(public view: ViewController, public navParams: NavParams) {
      this.activity = this.navParams.get('activity');
  }

  public close(){
    this.view.dismiss();
  }

}
