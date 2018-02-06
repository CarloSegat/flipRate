import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trick-page',
  templateUrl: './trick-page.component.html',
  styleUrls: ['./trick-page.component.css']
})
export class TrickPageComponent implements OnInit {
  trickName: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.trickName = this.route.snapshot.params.name;
  }

}
