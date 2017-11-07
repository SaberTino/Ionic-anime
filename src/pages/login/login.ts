import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
	selector:'login-page',
	templateUrl:'login.html'
})

export class LoginPage {
	constructor(public NavCtrl:NavController,public LoadCtrl:LoadingController){
	}
	userInfo:UserInfo={
		UserName:'SaberTino',
		PassWord:'22334455'
	}

	loadDefault(){
		let loading = this.LoadCtrl.create({
			content:"loading...",
			dismissOnPageChange:true,
			showBackdrop:true,
			cssClass:'danger'
		});
		loading.present();
		setTimeout(()=>{
			this.NavCtrl.push(HomePage);
		},1000);
		setTimeout(()=>{
			loading.dismiss();
		},3000);
	}

	loadCustom(){
		let loading = this.LoadCtrl.create({
			spinner:"dots",
			// content:`<div class="custom-spinner-container">
			// <div class="custom-spinner-box"></div>
			// </div>`,
			duration:5000
		});
		loading.onDidDismiss(()=>{
			console.log("Dismissed loading");
		});
		loading.present();
	}

	loadText(){
		let loading = this.LoadCtrl.create({
			spinner:"hide",
			content:"loading",
			duration:3000
		});
		loading.present();

	}

	btnClick(){
		this.loadDefault();
		// this.loadText();
		// this.loadCustom();
	}
}

export class UserInfo{
	UserName:string;
	PassWord:string;
}