import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

export class Shield {
  constructor(public year : number, public id: string, public imageUrl: string) {
  }
  public isHeader(){ return false;}
}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'shields.html',
})
export class App {
  name = 'Angular';
  showId : boolean = true;

  shields : Shield[] = [
    new Shield(1978, "3846",        "https://img.bricklink.com/ItemImage/PT/86/3846.t1.png"),
    new Shield(1978, "3846pb011",   "https://img.bricklink.com/ItemImage/PT/9/3846pb011.t1.png"),
    new Shield(1978, "3846pb011eu", "https://img.bricklink.com/ItemImage/PT/9/3846pb011eu.t1.png"),
    new Shield(1978, "3846pb012",   "https://img.bricklink.com/ItemImage/PT/9/3846pb012.t1.png"),
    new Shield(1978, "3846pb013",   "https://img.bricklink.com/ItemImage/PT/9/3846pb013.t1.png"),
    new Shield(1978, "3846pb014",   "https://img.bricklink.com/ItemImage/PT/9/3846pb014.t1.png")
  ]
}

bootstrapApplication(App);
