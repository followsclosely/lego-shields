import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { Bucket, ShieldService, Grid } from './shield.service';

@Component({
  selector: 'my-app',
  providers: [ShieldService],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    MatTabsModule, 
    MatSlideToggleModule, 
    MatGridListModule, 
    MatInputModule, 
    MatSelectModule, 
    MatFormFieldModule
  ],
  templateUrl: 'shields.html',
})
export class App {

  buckets : Bucket[]; 

  shieldsOnBaseplate: Grid[][];
  shieldsOnBaseplateColumns : number = 12;
  shieldsOnBaseplateValidColumns = [Array(100).fill(0).map((e, i) => i + 1)];

  showId : boolean = false;
  breakOnYear : boolean = false;

  constructor(private shieldService : ShieldService){
    this.buckets = shieldService.getShieldsByYear();
    this.shieldsOnBaseplate = shieldService.getShieldsOnBaseplate(this.shieldsOnBaseplateColumns);
  }

}

bootstrapApplication(App);
