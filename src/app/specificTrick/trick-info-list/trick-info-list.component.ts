import { Component, OnInit } from '@angular/core';
import { TrickService } from '../../trick.service';
import { Trick } from '../../model/trick';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trick-info-list',
  templateUrl: './trick-info-list.component.html',
  styleUrls: ['./trick-info-list.component.css']
})
export class TrickInfoListComponent implements OnInit {
  tricksObjects: Trick[] = [];
  trickName: string;
  constructor(private trickService: TrickService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.trickName = this.route.snapshot.params.name;
    this.trickService.getTrick().subscribe( trick => { this.tricksObjects.push(trick); console.log(trick); }
    );
  }

}
