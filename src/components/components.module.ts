import { NgModule } from "@angular/core";

import { IonicModule } from "ionic-angular";
import { CommonModule } from "@angular/common";

import { FacebookLoginComponent } from "./facebook-login/facebook-login";
import { UserLogoutComponent } from "./user-logout/user-logout";
import { PostFeedComponent } from "./post-feed/post-feed";
import { HeartButtonComponent } from "./heart-button/heart-button";
import { UserRelationshipComponent } from "./user-relationship/user-relationship";
import { FcmHandlerComponent } from "./fcm-handler/fcm-handler";
import { ImageUploadComponent, UploadModal } from "./image-upload/image-upload";
import { FileUploadComponent } from "./file-upload/file-upload";
import { PipesModule } from "../pipes/pipes.module";
import { DropZoneDirective } from "../directives/drop-zone/drop-zone";
import { CourseAddComponent } from "./course-add/course-add";
import { CourseReviewComponent } from "./course-review/course-review";

@NgModule({
  declarations: [
    FacebookLoginComponent,
    FacebookLoginComponent,
    UserLogoutComponent,
    PostFeedComponent,
    HeartButtonComponent,
    UserRelationshipComponent,
    FcmHandlerComponent,
    ImageUploadComponent,
    UploadModal,
    FileUploadComponent,
    CourseAddComponent,
    CourseReviewComponent
  ],
  imports: [CommonModule, IonicModule, PipesModule],
  exports: [
    FacebookLoginComponent,
    FacebookLoginComponent,
    UserLogoutComponent,
    PostFeedComponent,
    HeartButtonComponent,
    UserRelationshipComponent,
    FcmHandlerComponent,
    ImageUploadComponent,
    FileUploadComponent,
    CourseAddComponent,
    CourseReviewComponent
  ],
  entryComponents: [UploadModal]
})
export class ComponentsModule {}
