import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AuthProvider } from "../../providers/auth/auth";
import { DatabaseProvider } from "../../providers/database/database";
import { map } from "rxjs/operators";

@IonicPage()
@Component({
  selector: "page-course",
  templateUrl: "course.html"
})
export class CoursePage {
  courses: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    private db: DatabaseProvider
  ) {}

  ionViewDidLoad() {
    this.courses = this.db
      .getAllCourses()
      .snapshotChanges()
      .pipe(
        map(arr =>
          arr.map(doc => {
            return { id: doc.payload.doc.id, ...doc.payload.doc.data() };
          })
        )
      );
  }

  trackByFn(index, course) {
    return course.uid; // or item.id
  }
}
