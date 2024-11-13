import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";

@Component({
  selector: "app-add-folder-component",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./add-folder-component.component.html",
  styleUrls: ["./add-folder-component.component.scss"],
})
export class AddFolderComponentComponent {
  directoryName = "";
  selectedFiles: { file: File; preview: string }[] = [];
  showError = false; // Nueva propiedad para mostrar el mensaje de error

  @Output() filesUploaded = new EventEmitter<{ directoryName: string; files: File[] }>();

  constructor(private bottomSheetRef: MatBottomSheetRef<AddFolderComponentComponent>) {}

  handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const filesArray = Array.from(input.files);
      this.selectedFiles.push(
        ...filesArray.map((file) => ({
          file,
          preview: file.type.startsWith("image/") ? URL.createObjectURL(file) : "",
        }))
      );
      this.showError = false; // Oculta el error al añadir un archivo válido
    }
  }

  removeFile(index: number) {
    this.selectedFiles.splice(index, 1);
  }
  uploadFiles() {
    // Validación para verificar si hay al menos un archivo
    const hasFiles = this.selectedFiles.length > 0;

    if (hasFiles) {
      this.filesUploaded.emit({
        directoryName: this.directoryName,
        files: this.selectedFiles.map((f) => f.file),
      });
      this.bottomSheetRef.dismiss();
    } else {
      this.showError = true; // Muestra el mensaje de error si no hay archivos
    }
  }
}
