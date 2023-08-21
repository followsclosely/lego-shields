import { Component } from '@angular/core';
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
  
  constructor(private shieldService : ShieldService){
    this.buckets = shieldService.getShieldsByYear();
    this.shieldsOnBaseplate = shieldService.getShieldsOnBaseplate(this.shieldsOnBaseplateColumns);
  }
}
