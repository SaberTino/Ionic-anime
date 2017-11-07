import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DownLoadPage } from './download';

@NgModule({
  declarations: [
    DownLoadPage,
  ],
  imports: [
    IonicPageModule.forChild(DownLoadPage),
  ],
  exports: [
    DownLoadPage
  ]
})
export class DownloadPageModule {}
