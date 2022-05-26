import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { WizardComponent, ArchwizardModule } from "angular-archwizard";
import { UIModule } from "../../shared/ui/ui.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { NgxMaskModule } from "ngx-mask";
import { FlatpickrModule } from "angularx-flatpickr";
import { DropzoneModule } from "ngx-dropzone-wrapper";
import { NgSelectModule } from "@ng-select/ng-select";
import { ColorPickerModule } from "ngx-color-picker";
import { FormRoutingModule } from "../ui/form/form-routing.module";
import { ArtificialComponent } from "./artificial.component";

@NgModule({
  declarations: [ArtificialComponent],

  imports: [
    CommonModule,
    UIModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    NgxMaskModule.forRoot(),
    FlatpickrModule.forRoot(),
    DropzoneModule,
    NgSelectModule,
    ColorPickerModule,
    ArchwizardModule,
    FormRoutingModule,
  ],
})
export class ArtificialModule {}
