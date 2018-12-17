import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'trg-hello-world-dialog',
  templateUrl: './hello-world.dialog.html',
})
export class HelloWorldDialog implements OnInit {


  constructor(private dialogRef: MatDialogRef<HelloWorldDialog>) {

  }

  ngOnInit(): void {

  }
}




