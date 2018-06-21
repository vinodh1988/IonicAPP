import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BatteryStatus} from "@ionic-native/battery-status";
import {Contacts} from '@ionic-native/contacts';
import {Contact} from '@ionic-native/contacts';
/**
 * Generated class for the MobilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mobile',
  templateUrl: 'mobile.html',
})
export class MobilePage {
battery:number;
people:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public bs:BatteryStatus,public contacts:Contacts) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MobilePage');

    this.bs.onChange().subscribe(
       (status)=>this.battery=status.level
    );

    this.contacts.find(['displayName','phoneNumbers'],{filter:"",multiple:true}).then(
      (data)=>this.people=data
    );
   // this.contacts.find([‘displayName’, ‘name’, ‘phoneNumbers’], {filter: “”, multiple: true});
  }

}
