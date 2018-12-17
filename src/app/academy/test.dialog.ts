import {MatDialogRef} from '@angular/material';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'trg-test-dialog',
  templateUrl: './test.dialog.html'
})

export class TestDialog implements OnInit {

  mainForm: FormGroup;
  submitted = false;

  constructor(private dialogRef: MatDialogRef<TestDialog>,
              private form: FormBuilder) {

    this.mainForm = this.form.group({
      name: ['', Validators.minLength(6)],
      age: ['', Validators.required],
      icNum: ['', Validators.required],
      rating: [0],
      gender: [''],
      state: [''],

      agree: [''],
    });
  }

  ngOnInit(): void {

  }

  onSubmit(value: any){
    console.log(JSON.stringify(value));
    this.submitted = true;
    this.dialogRef.close();
  }
}
