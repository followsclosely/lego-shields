import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Shield } from '../shield.service';

export interface DialogData {
  shield: Shield;
}

@Component({
  selector: 'app-shield-details',
  templateUrl: './shield-details.component.html',
  styleUrls: ['./shield-details.component.css']
})
export class ShieldDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

}