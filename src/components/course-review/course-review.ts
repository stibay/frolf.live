import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { StarProvider } from "../../providers/star/star";
import "rxjs/add/operator/map";

@Component({
  selector: "course-review",
  templateUrl: "course-review.html"
})
export class CourseReviewComponent {
  @Input() userId;
  @Input() courseId;

  stars: Observable<any>;
  userStar: any;
  avgRating: Observable<any>;

  constructor(private starService: StarProvider) {}

  ngOnInit() {
    this.stars = this.starService.getCourseStars(this.courseId);

    this.userStar = this.starService.getUserStarForCourse(
      this.userId,
      this.courseId
    );

    this.avgRating = this.stars.map(arr => {
      const ratings = arr.map(v => v.value);
      return ratings.length
        ? ratings.reduce((total, val) => total + val) / arr.length
        : "not reviewed";
    });
  }

  starHandler(value) {
    this.starService.setStar(this.userId, this.courseId, value);
  }
}
