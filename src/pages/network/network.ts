import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { ModalNetworkPage } from '../modal-network/modal-network';

/*
  Generated class for the Network page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-network',
  templateUrl: 'network.html'
})
export class NetworkPage {
  public lst = [
    {id: 0, name: 'GVT-FD074', conectado: false, sinal: Sinal.Bom},
    {id: 1, name: 'Wireless-N', conectado: false, sinal: Sinal.Medio}
  ];
  constructor(public alertCtrl: AlertController, public modalCtrl: ModalController) {}

  public mostraModal(netId){
    let item = this.lst.find(x => x.id == netId);

    let modalInfo = this.modalCtrl.create(ModalNetworkPage, {
      id: netId,
      name: item.name,
      signal: Sinal[item.sinal],
      intensity: item.sinal
    });

    modalInfo.present();
  }

  public mostraAlerta(netId){
    let item = this.lst.find(x => x.id == netId);

    let alertConnect = this.alertCtrl.create({
      title: 'Conectar',
      subTitle: item.name,
      buttons: [{
        text: 'Cancelar',
        role: 'Cancel'
      },
      {
        text: 'Conectar',
        handler: data => {
          for (let i of this.lst) {
              i.conectado = false;
          }
          item.conectado = true;
        }
      }],
      inputs: [{
        name: 'Senha',
        placeholder: 'Coloque a senha',
        type: 'password'
      }]
    });

    let alertDisconnect = this.alertCtrl.create({
      title: 'Desconectar',
      subTitle: item.name,
      message: 'Sinal: '+ Sinal[item.sinal],
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancel'
        },
        {
          text: 'Desconectar',
          handler: data => {
            item.conectado = false;
          }
        }
      ]
    })
    if (item.conectado){
        alertDisconnect.present();
    }
    else{
        alertConnect.present();
    }
  }



}

 enum Sinal{
  Ruim,
  Medio,
  Bom,
  Otimo,
}
