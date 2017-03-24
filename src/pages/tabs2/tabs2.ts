import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NetworkPage } from '../network/network';


@Component({
  selector: 'page-tabs2',
  templateUrl: 'tabs2.html'
})
export class Tabs2Page {
    public tab21 = NetworkPage;

  constructor() {}
}
