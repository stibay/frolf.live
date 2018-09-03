import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";

export interface Star {
  userId: any;
  courseId: any;
  value: number;
}

@Injectable()
export class StarProvider {
  constructor(private afs: AngularFirestore) {}

  // Star reviews that belong to a user
  getUserStars(userId) {
    const starsRef = this.afs.collection("stars", ref =>
      ref.where("userId", "==", userId)
    );
    return starsRef.valueChanges();
  }

  // Star reviews that belong to a user
  getUserStarForCourse(userId, courseId) {
    const starsRef = this.afs.collection("stars", ref =>
      ref.where("userId", "==", userId)
    );
    return starsRef.valueChanges();
  }

  // Get all stars that belong to a Course
  getCourseStars(courseId) {
    const starsRef = this.afs.collection("stars", ref =>
      ref.where("courseId", "==", courseId)
    );
    return starsRef.valueChanges();
  }

  // Create or update star
  setStar(userId, courseId, value) {
    // Star document data
    const star: Star = { userId, courseId, value };

    // Custom doc ID for relationship
    const starPath = `stars/${star.userId}_${star.courseId}`;

    // Set the data, return the promise
    return this.afs.doc(starPath).set(star);
  }
}
