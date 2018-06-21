import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  developer:string="George";
  user:string;
  pass:string;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    let status=localStorage.getItem('logstatus');
    if(status!=null){
      this.navCtrl.push("FirstPage");
    }

  }

  validate(){
     if(this.user=="vinodh" && this.pass=="pass"){
       localStorage.setItem("logstatus","success");
       localStorage.setItem("user",this.user);
       this.navCtrl.push("FirstPage");
     }
  }
}
