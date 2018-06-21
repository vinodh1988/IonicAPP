import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendsPage } from './friends';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    FriendsPage,
  ],
  imports: [
    IonicPageModule.forChild(FriendsPage),
    HttpClientModule
  ],
})
export class FriendsPageModule {}
