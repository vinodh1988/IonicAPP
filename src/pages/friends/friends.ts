import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FriendsProvider} from '../../providers/friends/friends';

/**
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {
friends:string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
  public fp:FriendsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsPage');
    this.fp.getFriends().subscribe(
      (data:string[])=>{this.friends=data;
      console.log(this.friends)}
    );
  }

  

}
