import { Component, Output, EventEmitter } from "@angular/core";
import {
  AngularFireStorage,
  AngularFireUploadTask
} from "angularfire2/storage";
import { Observable } from "rxjs/Observable";
import { AngularFirestore } from "angularfire2/firestore";
import { finalize, tap } from "rxjs/operators";

@Component({
  selector: "file-upload",
  templateUrl: "file-upload.html"
})
export class FileUploadComponent {
  @Output() uploadFinished = new EventEmitter();

  // Main task
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) {}

  toggleHover(event: boolean) {
    console.log("hover");
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    // The File object
    const file = event.item(0);

    // Client-side validation example
    if (file.type.split("/")[0] !== "image") {
      console.error("unsupported file type :( ");
      return;
    }

    // The storage path
    const path = `${new Date().getTime()}_${file.name}`;

    const fileRef = this.storage.ref(path);

    // Totally optional metadata
    const customMetadata = { app: "Frolf" };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap => {
        if (snap.bytesTransferred === snap.totalBytes) {
          // Update firestore on completion
          this.db.collection("photos").add({ path, size: snap.totalBytes });
        }
      })
    );

    this.task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          if (this.task.task.snapshot.state == "success") {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
              this.uploadFinished.emit(url);
            });
          }
        })
      )
      .subscribe();
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return (
      snapshot.state === "running" &&
      snapshot.bytesTransferred < snapshot.totalBytes
    );
  }
}
