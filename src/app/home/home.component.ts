import { Component, OnInit } from '@angular/core';
import { TrickParentComponent } from './trick-icon/trick-parent.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tricks: string[] = ["ollie", 'flip', 'shovit', 'backside shovit', 'frontside', 'backside', 'nollie', 'nollie shovit'];
  constructor() { }

  ngOnInit() {
  }

}
