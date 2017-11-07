import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {IndexPage} from '../pages/index/index';
import {DetailPage} from '../pages/detail/detail';
import {UserCenterPage} from '../pages/user-center/user-center';
import {NotFoundPage} from '../pages/not-found/not-found';
import {VideoPlayPage} from '../pages/video-play/video-play';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import {DownLoadPage} from '../pages/download/download';
import {SettingsPage} from '../pages/settings/settings';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
    LoginPage,
    IndexPage,
    DetailPage,
    VideoPlayPage,
    UserCenterPage,
    DownLoadPage,
    NotFoundPage,
    SettingsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
    LoginPage,
    IndexPage,
    DetailPage,
    VideoPlayPage,
    UserCenterPage,
    DownLoadPage,
    NotFoundPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
