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

import { UserComponent } from "./user.component";
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [UserComponent],

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
    NgbModalModule,
  ],
})
export class UserModule {}
