import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

declare var sensors;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  proximity:number;

  constructor(public navCtrl: NavController, platform: Platform) {
    this.proximity = 0;
    
    platform.ready().then(() => {
      this.initSensor();
    })

  }

  initSensor() {
    sensors.enableSensor("PROXIMITY")
    
    setInterval(() => {
      sensors.getState((values) => {
        this.proximity = values[0]
      });
    }, 300)
    
  }

}
