import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SQLStorage } from '../providers/sql-storage';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

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
    ActivityPage
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
    ActivityPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLStorage,
    SQLite
  ]
})
export class AppModule {}
