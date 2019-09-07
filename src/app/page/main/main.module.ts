import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', redirectTo: 'user' },
      { path: 'user', loadChildren: './../user/user.module#UserModule', data: {title: 'List User'}},
      { path: 'animate', loadChildren: './../settings/settings.module#SettingsModule', data: {title: 'Animate '}},


    ]
  },
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainComponent]
})
export class MainModule { }
