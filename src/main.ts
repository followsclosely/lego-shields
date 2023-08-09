import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { Bucket, ShieldService, YearOrShield } from './shield.service';

@Component({
  selector: 'my-app',
  providers: [ShieldService],
  standalone: true,
  imports: [CommonModule, FormsModule, MatCheckboxModule, MatTabsModule, MatSlideToggleModule, MatGridListModule],
  templateUrl: 'shields.html',
})
export class App {
  buckets : Bucket[]; 

  shieldsOnBaseplate: YearOrShield[][];
  shieldsOnBaseplateColumns : number = 28;

  showId : boolean = false;
  breakOnYear : boolean = false;

  constructor(private shieldService : ShieldService){
    this.buckets = shieldService.getShieldsByYear();
    this.shieldsOnBaseplate = shieldService.getShieldsOnBaseplate(this.shieldsOnBaseplateColumns);
  }

}

bootstrapApplication(App);
