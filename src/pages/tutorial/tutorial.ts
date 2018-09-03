import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { TabsPage } from "../tabs/tabs";

@IonicPage()
@Component({
  selector: "page-tutorial",
  templateUrl: "tutorial.html"
})
export class TutorialPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad TutorialPage");
  }

  async finish() {
    await this.storage.set("tutorialComplete", true);
    this.navCtrl.setRoot(TabsPage);
    //this.router.navigateByUrl("/");
  }
}
