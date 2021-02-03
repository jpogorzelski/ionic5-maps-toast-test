import {Component, OnDestroy, OnInit} from '@angular/core';
import {GoogleMap, GoogleMaps} from '@ionic-native/google-maps/ngx';
import {Platform, ToastController} from '@ionic/angular';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  private map: GoogleMap;

  private readonly EUROPE_CENTER_COORDS = {lat: 56.102222, lng: 9.254444};
  private readonly DEFAULT_ZOOM = 4;

  constructor(private toastCtrl: ToastController,
              private platform: Platform) {
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.map = GoogleMaps.create('map', {
        mapType: 'MAP_TYPE_NORMAL',
        camera: {
          target: this.EUROPE_CENTER_COORDS,
          zoom: this.DEFAULT_ZOOM
        }
      });
    });
  }

  async displayToast() {
    console.log('displayToast()');
    const toast = await this.toastCtrl.create({
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      buttons: [{text: 'OK'}],
      position: 'top'
    });

    await toast.present();
  }


}
