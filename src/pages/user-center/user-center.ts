import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {App} from 'ionic-angular';
/**
 * Generated class for the UserCenterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-center',
  templateUrl: 'user-center.html',
})
export class UserCenterPage {

constructor(private app : App, public navCtrl : NavController, public LoadCtrl : LoadingController, public navParams : NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserCenterPage');
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
      this.app.getRootNav().push(LoginPage);
		},1000);
		setTimeout(()=>{
			loading.dismiss();
		},3000);
	}
  btnClick() {
    this.loadDefault();
  }

}
/**
* ionic 跳转子页面隐藏底部导航栏
第一种方法：

在tab里面添加一个属性[tabsHideOnSubPages] = 'true' < ion - tab[root] = "tab1Root" [tabsHideOnSubPages] = "true" tabTitle = "首页" tabIcon = "homeImg" > </ion-tab>

第二种方法：(本页面使用这种方法)

在需要跳转页面的.ts文件中写入以下代码

引入App类
import {App} from 'ionic-angular';

声明初始化app对象
constructor(private app : App) {}

从根页面跳转
this
  .app
  .getRootNav()
  .push(nextPage);
 */
