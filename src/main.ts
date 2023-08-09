import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

import { Bucket, ShieldService } from './shield.service';


@Component({
  selector: 'my-app',
  providers: [ShieldService],
  standalone: true,
  imports: [CommonModule],
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
