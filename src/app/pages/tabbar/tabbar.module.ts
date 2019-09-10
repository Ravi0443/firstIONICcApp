import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabbarPage } from './tabbar.page';

const routes: Routes = [
  {
    path: '',
    component: TabbarPage,
    children: [
      {
        path: 'tab1', loadChildren: '../tab1/tab1.module#Tab1PageModule'
      },
      {
        path: 'tab2', loadChildren: '../tab2/tab2.module#Tab2PageModule'
      }
    ]
  },
  {
    path: '', redirectTo: '/tabbar/tab1'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabbarPage]
})
export class TabbarPageModule {}
