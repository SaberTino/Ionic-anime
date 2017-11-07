import { Component } from '@angular/core';
import {LoadingController, ViewController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the DownloadPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-download',
  templateUrl: 'download.html',
})
export class DownLoadPage {

  constructor(public viewCtrl : ViewController, public loadCtrl : LoadingController, public navCtrl : NavController, public navParams : NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DownLoadPage');
  }

  showLoading() {
    let myLoad = this
      .loadCtrl
      .create({content: '下载中'})

    myLoad.present();
    setTimeout(() => {
      //关闭加载中窗口
      myLoad.dismiss();
      //关闭当前模态窗
      this
        .viewCtrl
        .dismiss();
    }, 2000);
  }

}