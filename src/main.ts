import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

export class Shield {
  constructor(public id: string, public imageUrl: string) {}
}
export class Bucket {
  constructor(public year : number, public shields : Shield[]){}
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

  buckets : Bucket[] = [
    new Bucket(1978, [
      new Shield("3846",        "https://img.bricklink.com/ItemImage/PT/86/3846.t1.png"),
      new Shield("3846pb011",   "https://img.bricklink.com/ItemImage/PT/9/3846pb011.t1.png"),
      new Shield("3846pb011eu", "https://img.bricklink.com/ItemImage/PT/9/3846pb011eu.t1.png"),
      new Shield("3846pb012",   "https://img.bricklink.com/ItemImage/PT/9/3846pb012.t1.png"),
      new Shield("3846pb013",   "https://img.bricklink.com/ItemImage/PT/9/3846pb013.t1.png"),
      new Shield("3846pb014",   "https://img.bricklink.com/ItemImage/PT/9/3846pb014.t1.png")]
    ),
    new Bucket(1979, [
      new Shield("3846p47",     "https://img.bricklink.com/ItemImage/PT/9/3846p47.t1.png"),
      new Shield("3846px2",     "https://img.bricklink.com/ItemImage/PT/9/3846px2.t1.png"),
      new Shield("3846px21",    "https://img.bricklink.com/ItemImage/PT/9/3846px21.t1.png"),
      new Shield("3846px3",     "https://img.bricklink.com/ItemImage/PT/9/3846px3.t1.png"),
      new Shield("3876",        "https://img.bricklink.com/ItemImage/EXTT/18322.t1.png")]
    ),
    new Bucket(1980, [
      new Shield("3846pb001",   "https://img.bricklink.com/ItemImage/PT/9/3846pb001.t1.png")]
    ),
    new Bucket(1984, [
      new Shield("3846p46",     "https://img.bricklink.com/ItemImage/PT/9/3846p46.t1.png"),
      new Shield("3846p4g",     "https://img.bricklink.com/ItemImage/PT/9/3846p4g.t1.png"),
      new Shield("3846p4h",     "https://img.bricklink.com/ItemImage/PT/9/3846p4h.t1.png"),
      new Shield("3846px9",     "https://img.bricklink.com/ItemImage/PT/9/3846px9.t1.png")]
    ),
    new Bucket(1988, [
      new Shield("3846p48",     "https://img.bricklink.com/ItemImage/PT/8/3846p48.t1.png"),
      new Shield("3846px10",    "https://img.bricklink.com/ItemImage/PT/9/3846px10.t1.png")]
    ),
    new Bucket(1992, [
      new Shield("2586p4c",     "https://img.bricklink.com/ItemImage/PT/9/2586p4c.t1.png"),
      new Shield("3846p44",    "https://img.bricklink.com/ItemImage/PT/9/3846p44.t1.png")]
    ),
    new Bucket(1993, [
      new Shield("2586p4b",    "https://img.bricklink.com/ItemImage/PT/9/2586p4b.t1.png")]
    ),
    new Bucket(1994, [
      new Shield("2586px10",    "https://img.bricklink.com/ItemImage/PT/1/2586px10.t1.png"),
      new Shield("3846p44b",    "https://img.bricklink.com/ItemImage/PT/9/3846p44b.t1.png")]
    ),
    new Bucket(1995, [
      new Shield("2586p4d",    "https://img.bricklink.com/ItemImage/PT/1/2586p4d.t1.png"),
      new Shield("3846p4d",    "https://img.bricklink.com/ItemImage/PT/1/3846p4d.t1.png")]
    ),
    new Bucket(1997, [
      new Shield("2586p4f",     "https://img.bricklink.com/ItemImage/PT/9/2586p4f.t1.png"),
      new Shield("2586pw1",     "https://img.bricklink.com/ItemImage/PT/2/2586pw1.t1.png"),
      new Shield("2586px3",     "https://img.bricklink.com/ItemImage/EXTT/5635.t1.png"),
      new Shield("3846px7",     "https://img.bricklink.com/ItemImage/PT/9/3846px7.t1.png")]
    ),
    new Bucket(2000, [
      new Shield("2586p4g",     "https://img.bricklink.com/ItemImage/PT/9/2586p4g.t1.png"),
      new Shield("2586ps1",     "https://img.bricklink.com/ItemImage/EXTT/5638.t1.png"),
      new Shield("2586px5",     "https://img.bricklink.com/ItemImage/PT/9/2586px5.t1.png"),
      new Shield("3846px5",     "https://img.bricklink.com/ItemImage/PT/9/3846px5.t1.png")]
    ),

  ];


}

bootstrapApplication(App);
