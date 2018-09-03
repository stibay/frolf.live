import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { CoursePage } from "./course";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [CoursePage],
  imports: [IonicPageModule.forChild(CoursePage), ComponentsModule]
})
export class CoursePageModule {}
