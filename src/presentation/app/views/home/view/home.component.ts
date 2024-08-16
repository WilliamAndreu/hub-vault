import { Component, Injectable, signal } from "@angular/core";
import { HomeViewModel } from "../viewmodel/home.viewmodel";
import { ContentEntity } from "@models/content/content-entity";
import { FormControl } from "@angular/forms";
import { FileInputValidators, FileInputValue } from "@ngx-dropzone/cdk";

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: "app-home",
  standalone: false,
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  validators = [FileInputValidators.accept("image/*")];
  profileImg = new FormControl<FileInputValue>(null, this.validators);
  dropZoneDetector = signal(false);
  constructor(public viewModel: HomeViewModel) {
    this.initDropFileObserver();
  }

  public selectContent(content: ContentEntity) {
    if (content.type === "dir") {
      this.viewModel.addRouteToGithubRouter(content.url);
    } else {
      console.log(content);
      this.viewModel.downloadFile(content!.download_url!, content.name);
    }
  }

  private initDropFileObserver() {
    this.profileImg.valueChanges.subscribe((value) => {
      console.log("name has changed:", value);
      this.dropZoneDetector.set(false);
    });
  }

  onDragEnter(event: DragEvent) {
    event.preventDefault();
    this.dropZoneDetector.set(true);
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
     const target = event.currentTarget as Node;
     const relatedTarget = event.relatedTarget as Node;
     if (!relatedTarget || !target.contains(relatedTarget)) {
      this.dropZoneDetector.set(false);
     }
  }
}
