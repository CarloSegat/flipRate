import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Output() rightEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Output() wrongEmitter: EventEmitter<number> = new EventEmitter<number>()
  @Output() ishEmitter: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
  }

  right() {
    this.rightEmitter.emit(1);
  }
  ish() {
    this.ishEmitter.emit(1);
  }
  wrong() {
    this.wrongEmitter.emit(1);
  }

}
