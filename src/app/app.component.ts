import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { Bucket, ShieldService, Grid, Shield } from './shield.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lego-shields';

  showId : boolean = false;
  breakOnYear : boolean = false;
  hideMissing : boolean = false;
  hideOwned : boolean = false;

  buckets : Bucket[]; 

  shieldsOnBaseplate: Grid[][];
  shieldsOnBaseplateColumns : number = 14;
  shieldsOnBaseplateValidColumns = [Array(100).fill(0).map((e, i) => i + 1)];
  
  constructor(private shieldService : ShieldService, private dialog: MatDialog){
    this.buckets = shieldService.getShieldsByYear();
    this.shieldsOnBaseplate = shieldService.getShieldsOnBaseplate(this.shieldsOnBaseplateColumns);
  }

  openDialog(): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '850px',
    });
  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'about-dialog.html',
  standalone: true,
})
export class DialogAnimationsExampleDialog {
  details : boolean = false;
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}