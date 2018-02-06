import { Component, OnInit } from '@angular/core';
import { TrickParentComponent } from './trick-icon/trick-parent.component';
import { TrickService } from '../trick.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tricks: string[] = [];
  constructor(private trickService: TrickService) { }

  ngOnInit() {
    this.trickService.getAllTrickName()
        .subscribe((listOfTricks) => { this.tricks = listOfTricks; });
  }

}
