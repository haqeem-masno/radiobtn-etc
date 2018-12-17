import {Component, OnInit} from '@angular/core';
import {Cohort} from './cohort.model';
import {Router} from '@angular/router';
import {CohortStatus} from './cohort-status.enum';
import {TestDialog} from './test.dialog';
import {MatDialog, MatDialogConfig, MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Component({
  selector: 'trg-cohort-list',
  templateUrl: './cohort-list.page.html',
  styleUrls: ['./cohort-list.page.scss']
})
export class CohortListPage implements OnInit {

  public columns = ['id', 'code', 'description', 'status'];
  public dataSource: Cohort[];

  constructor(private router: Router, private dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.dataSource = [
      {
        id: 1,
        code: 'CHRT-001',
        description: 'Cohort 01',
        status: CohortStatus.DEPLOYED
      },
      {
        id: 2,
        code: 'CHRT-002',
        description: 'Cohort 01',
        status: CohortStatus.DEPLOYED
      },
    ];
  }

  view(cohort: Cohort): void {
    console.log(JSON.stringify(cohort));
    this.router.navigate(['/academy/cohorts/', cohort.code]);
  }


  showTest(): void {
    const config = new MatDialogConfig();
    config.width = '600px';
    config.height = '480px';
    const dialogRef = this.dialog.open(TestDialog, config);
    dialogRef.afterClosed().subscribe(result => {
      this.snackBar.open('Message has been sent', '',
        <MatSnackBarConfig>{duration: 3000});
    });
  }
}

