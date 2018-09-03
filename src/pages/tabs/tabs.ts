import { Component } from "@angular/core";
import { AuthProvider } from "../../providers/auth/auth";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = "HomePage";
  tab2Root = "PostsCreatePage";
  tab3Root = "UsersPage";
  tab4Root = "ProfilePage";
  tab5Root = "VisionPage";
  tab6Root = "GameNewPage";
  tab7Root = "CoursePage";

  constructor(public auth: AuthProvider) {}

  ionViewCanEnter() {
    return this.auth.isLoggedIn();
  }
}
