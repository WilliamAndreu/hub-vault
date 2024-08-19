import { Component, Injectable, ViewChild, signal } from "@angular/core";
import { HomeViewModel } from "../viewmodel/home.viewmodel";
import { ContentEntity } from "@models/content/content.entity";
import { FormControl } from "@angular/forms";
import { FileInputValidators, FileInputValue } from "@ngx-dropzone/cdk";
import { MatMenuTrigger } from "@angular/material/menu";
import { environment } from "@environments/environment";

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
  //validators = [FileInputValidators.accept("image/*")];
  profileImg = new FormControl<FileInputValue>(null);
  dropZoneDetector = signal(false);
  optionZoneDetector = signal(false);

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger | undefined;

  constructor(public viewModel: HomeViewModel) {
    this.initDropFileObserver();
    console.log("Env is " + environment.production)
  }

  public selectContent(content: ContentEntity) {
    if (content.type === "dir") {
      this.viewModel.addRouteToGithubRouter(content.url);
    } else {
      this.viewModel.openDialog(content);
    }
  }

  private initDropFileObserver() {
    this.profileImg.valueChanges.subscribe((value) => {
      this.dropZoneDetector.set(false);
      if (value) {
        this.viewModel.initUploadContent(value as File);
      }
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

  onOptionZoneEnterw(event: any) {
    this.optionZoneDetector.set(true);
  }
  onOptionZoneLevew(event: any) {
    this.optionZoneDetector.set(false);
  }



  stopEventsPropagation(event: any) {
    event.stopPropagation();
  }
}
