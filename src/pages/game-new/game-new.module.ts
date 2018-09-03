import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameNewPage } from './game-new';

@NgModule({
  declarations: [
    GameNewPage,
  ],
  imports: [
    IonicPageModule.forChild(GameNewPage),
  ],
})
export class GameNewPageModule {}
