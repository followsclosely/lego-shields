import { Component } from '@angular/core';
import { ShieldService, Shield } from './shield.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lego-shields';

  showId : boolean = false;
  hideMissing : boolean = true;
  hideOwned : boolean = false;

  shieldsOnBaseplate: Shield[][];
  shieldsOnBaseplateColumns : number = 16;
  
  constructor(private shieldService : ShieldService){
    this.shieldsOnBaseplate = this.shieldService.getShieldsOnBaseplate(this.shieldsOnBaseplateColumns);
  }

  update(){
    this.shieldsOnBaseplate = this.shieldService.getShieldsOnBaseplate(this.shieldsOnBaseplateColumns);
  }
}
