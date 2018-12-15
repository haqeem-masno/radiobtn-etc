import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'trg-apprentice-creator',
  templateUrl: './apprentice-creator.dialog.html',
  styleUrls:['./apprentice-detail.page.scss']
})
export class ApprenticeCreatorDialog implements OnInit {

  mainForm: FormGroup;
  submitted = false;

  constructor(private dialogRef: MatDialogRef<ApprenticeCreatorDialog>,
              private form: FormBuilder) {
    this.mainForm = this.form.group({
      code: ['', Validators.required],
      name: ['', Validators.minLength(6)],
      email: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit(value: any) {
    console.log(JSON.stringify(value));
    this.submitted = true;
    this.dialogRef.close();
  }
}
