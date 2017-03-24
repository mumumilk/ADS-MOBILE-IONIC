import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { DisciplinePage } from '../pages/discipline/discipline';
import { TaskPage } from '../pages/task/task';
import { UnoPage } from '../pages/uno/uno';
import { MenuPage } from '../pages/menu/menu';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage,
    DisciplinePage,
    TaskPage,
    UnoPage,
    MenuPage
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
    MenuPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
