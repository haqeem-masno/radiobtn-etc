import {Component, OnInit} from '@angular/core';
import {ApprenticeDataSource} from './apprentice.data-source';
import {AcademyService} from '../../services/academy.service';
import {Apprentice} from './apprentice.model';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig, MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {ApprenticeCreatorDialog} from './apprentice-creator.dialog';

@Component({
  selector: 'trg-apprentice-list',
  templateUrl: './apprentice-list.page.html',
  styleUrls: ['./apprentice-list.page.scss']
})
export class ApprenticeListPage implements OnInit {

  public columns = ['id', 'code', 'name'];
  public dataSource: ApprenticeDataSource;

  constructor(private academyService: AcademyService,
              private router: Router,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.dataSource = new ApprenticeDataSource(this.academyService);
  }

  view(apprentice: Apprentice): void {
    console.log(JSON.stringify(apprentice));
    this.router.navigate(['/academy/apprentices/', apprentice.code]);
  }

  show(): void {
    const config = new MatDialogConfig();
    config.width = "600px";
    config.height = "480px";
    const dialogRef = this.dialog.open(ApprenticeCreatorDialog, config);
    dialogRef.afterClosed().subscribe(result => {
      this.snackBar.open('Message has been sent', '',
        <MatSnackBarConfig>{duration: 3000});
    });
  }
}
