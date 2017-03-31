import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';


@Component({
  selector: 'page-modal-network',
  templateUrl: 'modal-network.html'
})
export class ModalNetworkPage {
  public id;
  public name;
  public signal;
  public intensity;

  constructor(public view: ViewController, public navParams: NavParams) {
    this.id = this.navParams.get('id');
    this.name = this.navParams.get('name');
    this.signal = this.navParams.get('signal');
    this.intensity = this.navParams.get('intensity');
  }

  fechar(){
    this.view.dismiss();
  }

}
