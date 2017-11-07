import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetailPage} from '../detail/detail'
import {App} from 'ionic-angular';
/**
 * Generated class for the IndexPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

constructor(public app : App, public navCtrl : NavController, public navParams : NavParams) {
  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }
  jumpToDetail(index) {
    //跳转到详情页，同时将产品的id发给detail
this.app.getRootNav().push(DetailPage);
  }


}
