import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLStorage } from '../providers/sql-storage';

import { MenuPage } from '../pages/menu/menu';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { DisciplinePage } from '../pages/discipline/discipline';
import { TaskPage } from '../pages/task/task';
import { UnoPage } from '../pages/uno/uno';

import { Tabs2Page } from '../pages/tabs2/tabs2';
import { NetworkPage } from '../pages/network/network';
import { ModalNetworkPage } from '../pages/modal-network/modal-network';

import { ActivityPage } from '../pages/activity/activity';
import { ModalActivityPage } from '../pages/modal-activity/modal-activity';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage,
    DisciplinePage,
    TaskPage,
    UnoPage,
    MenuPage,
    Tabs2Page,
    NetworkPage,
    ModalNetworkPage,
    ActivityPage,
    ModalActivityPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabsPage,
    DisciplinePage,
    TaskPage,
    UnoPage,
    MenuPage,
    Tabs2Page,
    NetworkPage,
    ModalNetworkPage,
    ActivityPage,
    ModalActivityPage
  ],
  providers: [
    SQLite,
    SQLStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
