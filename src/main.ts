import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {MatDialog, MAT_DIALOG_DATA, MatDialogModule, DialogPosition} from '@angular/material/dialog';

import { Bucket, ShieldService, Grid, Shield } from './shield.service';

import { ShieldDetailsComponent } from './shield-details/shield-details.component';

@Component({
  selector: 'my-app',
  providers: [ShieldService],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule, 
    MatGridListModule, 
    MatInputModule,
    MatDialogModule
  ],
  templateUrl: 'shields.html',
})
export class App {

  showId : boolean = false;
  breakOnYear : boolean = false;
  hideMissing : boolean = false;
  hideOwned : boolean = false;

  buckets : Bucket[]; 

  shieldsOnBaseplate: Grid[][];
  shieldsOnBaseplateColumns : number = 14;
  shieldsOnBaseplateValidColumns = [Array(100).fill(0).map((e, i) => i + 1)];

  

  constructor(private shieldService : ShieldService, public dialog: MatDialog){
    this.buckets = shieldService.getShieldsByYear();
    this.shieldsOnBaseplate = shieldService.getShieldsOnBaseplate(this.shieldsOnBaseplateColumns);
  }

  openDialog(event: any, shield : Shield) {

    let po: DialogPosition = { left: event.clientX + 'px', top: event.clientY + 'px'};

    this.dialog.open(ShieldDetailsComponent, {
      data: {
        'shield': shield,
      },
      position: po,
    });
  }

}

bootstrapApplication(App);
