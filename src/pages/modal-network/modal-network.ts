import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';


@Component({
  selector: 'page-modal-network',
  templateUrl: 'modal-network.html'
})
export class ModalNetworkPage {
  public id;

  constructor(public view: ViewController, public navParams: NavParams) {
    //this.id = this.navParams.get('id');
    this.id = 5;
  }

  fechar(){
    this.view.dismiss();
  }

}
