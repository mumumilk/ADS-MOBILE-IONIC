import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { ModalActivityPage } from '../modal-activity/modal-activity';
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
  public activities : Activity[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public db : SQLStorage, public modalCtrl : ModalController, public alertCtrl : AlertController) {
    this.db.create('meu_banco');

    this.db.query('CREATE TABLE IF NOT EXISTS activities(id INTEGER PRIMARY KEY AUTOINCREMENT, description TEXT, type INTEGER, date TEXT, content TEXT, completed INTEGER default 0)');

    this.getActivities();
  }

  public getActivities(){
    this.activities = [];

    this.db.query('SELECT * FROM activities').then(result => {
       let resultado = result.res.rows;

       for (let i = 0; i < resultado.length; i++) {
         let ac = new Activity();
         ac.id = resultado.item(i).id;
         ac.type = resultado.item(i).type;
         ac.date = resultado.item(i).date;
         ac.description = resultado.item(i).description;
         ac.content = resultado.item(i).content;
         ac.completed = resultado.item(i).completed;
         ac.typeName = Type[ac.type];
         this.activities.push(ac);
       }
    })
  }

  public remove(id){
    let alert = this.alertCtrl.create({
      title: 'Remover',
      message: 'Deseja excluir esse item?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Sim',
          handler: data => {
             this.removeActivity(id);
           }
         }
      ]
    });

    alert.present();
  }

  public removeActivity(id){
    this.db.query('DELETE FROM activities where id = (?)', [id]);
    this.getActivities();
  }

  public insertActivity(activity : Activity){
    this.db.query('INSERT INTO activities (type, date, content, description, completed) VALUES (?,?,?,?,?)', [activity.type, activity.date,activity.content, activity.description ,activity.completed]);
    this.getActivities();
  }

  public updateActivity(activity : Activity){
    this.db.query('UPDATE activities SET type = (?), date = (?), description = (?), completed = (?) WHERE id = (?)', [activity.type, activity.date, activity.date ,activity.content, activity.description ,activity.completed, activity.id]);
    this.getActivities();
  }

  public deleteActivity(id){
    this.db.query('DELETE FROM activities WHERE id = (?)', [id]);
    this.getActivities();
  }

  public showModal(id){
    let modalInfo = this.modalCtrl.create(ModalActivityPage, { activity : this.getActivity(id)});

    modalInfo.onDidDismiss(result => {
      if(result == undefined){

      }
      else if (result.id == 0) {
        this.insertActivity(result);
      }
      else{
        this.updateActivity(result);
      }
    })

    modalInfo.present();
  }

  public getActivity(id){
    let ac = new Activity();

    if (id >= 0) {
      this.db.query('SELECT * FROM activities where id = (?) LIMIT 1', [id]).then(result => {
         let resultado = result.res.rows;


         for (let i = 0; i < resultado.length; i++) {
           ac.id = resultado.item(i).id;
           ac.type = resultado.item(i).type;
           ac.date = resultado.item(i).date;
           ac.content = resultado.item(i).content;
           ac.description = resultado.item(i).description;
           ac.completed = resultado.item(i).completed;
         }

         if (resultado.length < 1){
           ac.id = 0;
         }
      })
    }
    else{
      ac.id = 0;
    }

    return ac;
  }

}

export class Activity{
    public id : number;
    public type : Type;
    public date : any;
    public description : string;
    public content : string;
    public completed : boolean;
    public typeName : string;
}

export enum Type{
  Prova = 1,
  Trabalho = 2
}
