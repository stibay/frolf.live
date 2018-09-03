import { Directive, HostListener, Output, EventEmitter } from "@angular/core";

@Directive({
  selector: "[drop-zone]" // Attribute selector
})
export class DropZoneDirective {
  @Output() dropped = new EventEmitter<FileList>();
  @Output() hovered = new EventEmitter<boolean>();

  constructor() {
    console.log("dropZone");
  }

  @HostListener("drop", ["$event"])
  onDrop($event) {
    console.log("onDrop");
    $event.preventDefault();
    this.dropped.emit($event.dataTransfer.files);
    this.hovered.emit(false);
  }

  @HostListener("dragover", ["$event"])
  onDragOver($event) {
    console.log("onDragOver");

    $event.preventDefault();
    this.hovered.emit(true);
  }

  @HostListener("dragleave", ["$event"])
  onDragLeave($event) {
    console.log("onDragLeave");

    $event.preventDefault();
    this.hovered.emit(false);
  }
}
