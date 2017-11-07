import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {IndexPage} from '../index/index'
import {UserCenterPage} from '../user-center/user-center'
import {SettingsPage} from '../settings/settings'

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	indexPage:any;
	userCenterPage:any;
  settingsPage : any;
	constructor(public navCtrl: NavController,public navParams:NavParams) {
		this.indexPage = IndexPage;
		this.userCenterPage = UserCenterPage;
		this.settingsPage = SettingsPage;
	}
	ionViewWillEnter(){
		console.log('ionViewDidLoad HomePage');
	}
}
