import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trick-parent',
  templateUrl: './trick-parent.component.html',
  styleUrls: ['./trick-parent.component.css']
})
export class TrickParentComponent implements OnInit {
  @Input() name: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  openTrick() {
    console.log(this.name);
    this.router.navigate(['/open-trick', this.name]);
  }

}
