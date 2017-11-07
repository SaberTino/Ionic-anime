import { Component } from '@angular/core';
import {IonicPage, NavController,ModalController ,NavParams, AlertController} from 'ionic-angular';

import {VideoPlayPage} from '../video-play/video-play';
import {NotFoundPage} from '../not-found/not-found';
import {HomePage} from '../home/home';
import {DownLoadPage} from '../download/download'
import {App} from 'ionic-angular';
/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  
  //保存id
  productId:number;
constructor(public modalCtrl:ModalController,public app : App,public myAs : AlertController, public navCtrl : NavController, public navParams : NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  
    
  }

  jumpToNotFound(){
    this.navCtrl.push(NotFoundPage);
  }

jumpToVideoPlay() {
this.app.getRootNav().push(VideoPlayPage);

}
jumpToHome(){
  this.navCtrl.push(HomePage);
}
jumpGoHome(){
  this.navCtrl.pop();
}
DownLoad(){
  let myModal = this.modalCtrl.create(DownLoadPage);
    myModal.present();
  }


showMenu() {
  let myMenu = this.myAs.create({
      title: '分享视频',
      buttons: [
        {
          text: "新浪微博",handler: () => {console.log('用户选择分享到新浪微博');}
        },
        {
          text: "微信朋友圈",handler: () => {console.log('用户选择分享到朋友圈');}
        }, 
        {
          text: "取消",role: 'cancel',handler: () => {console.log('用户选择取消指令');}
        }, 
        {
          text: "删除",role: 'destructive',handler: () => {console.log('用户选择删除指令');}
        }
      ]
    });
  myMenu.present();
}


}

  

