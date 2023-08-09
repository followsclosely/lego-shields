import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Bucket, ShieldService } from './shield.service';


@Component({
  selector: 'my-app',
  providers: [ShieldService],
  standalone: true,
  imports: [CommonModule, FormsModule, MatCheckboxModule, MatTabsModule],
  templateUrl: 'shields.html',
})
export class App {
  buckets : Bucket[]; 
  showId : boolean = false;

  constructor(private shieldService : ShieldService){
    this.buckets = shieldService.getShields();
  }

}

bootstrapApplication(App);
