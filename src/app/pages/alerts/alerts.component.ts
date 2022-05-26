import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

import { WizardComponent as BaseWizardComponent } from "angular-archwizard";
import { Message } from "../other/profile/profile.model";
import { messageData } from "../other/profile/data";

@Component({
  selector: "app-alerts",
  templateUrl: "./alerts.component.html",
  styleUrls: ["./alerts.component.scss"],
})
export class AlertsComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  messageData: Message[];

  // validation form
  validationForm: FormGroup;
  profileValidationForm: FormGroup;

  submit: boolean;
  submitForm: boolean;
  @ViewChild("wizardForm", { static: false }) wizardForm: BaseWizardComponent;

  selectValue: string[];
  selectValueNumber: string[];
  selectValue2: string[];

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [
      { label: 'Shreyu', path: "/" },
      { label: "Forms", path: "/" },
      { label: "Form Wizard", path: "/", active: true },
    ];

    this.selectValue2 = ["> (greater than)", "< (less than)", "= (equal to)"];
    this.selectValueNumber = ["1", "2", "3", "4"];

    this._fetchData();

    /**
     * form value validation
     */
    this.validationForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
      confirm: ["", Validators.required],
    });

    this.profileValidationForm = this.formBuilder.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", Validators.required],
    });

    this.submit = false;
    this.submitForm = false;
  }

  /**
   * Returns form
   */
  get form() {
    return this.validationForm.controls;
  }

  get profileForm() {
    return this.profileValidationForm.controls;
  }

  /**
   * Go to next step while form value is valid
   */
  formSubmit() {
    if (this.validationForm.valid) {
      this.wizardForm.goToNextStep();
    }
    this.submit = true;
  }

  /**
   * Go to next step while second form value is valid
   */
  profileFormSubmit() {
    if (this.profileValidationForm.valid) {
      this.wizardForm.goToNextStep();
    }
    this.submitForm = true;
  }

  private _fetchData() {
    this.messageData = messageData;
  }
}
