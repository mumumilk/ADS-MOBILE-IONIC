import { Component } from '@angular/core';

import { LoginPage } from '../login/login';
import { DisciplinePage } from '../discipline/discipline';
import { TaskPage } from '../task/task';
import { UnoPage } from '../uno/uno';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = LoginPage;
  tab2Root: any = DisciplinePage;
  tab3Root: any = TaskPage;
  tab4Root: any = UnoPage;

  constructor() {

  }
}
