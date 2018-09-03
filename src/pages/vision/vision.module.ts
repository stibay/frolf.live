import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { VisionPage } from "./vision";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [VisionPage],
  imports: [IonicPageModule.forChild(VisionPage), ComponentsModule]
})
export class VisionPageModule {}
