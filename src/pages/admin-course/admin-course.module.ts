import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminCoursePage } from './admin-course';

@NgModule({
  declarations: [
    AdminCoursePage,
  ],
  imports: [
    IonicPageModule.forChild(AdminCoursePage),
  ],
})
export class AdminCoursePageModule {}
