import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Trick } from './model/trick';

@Injectable()
export class TrickService {

  constructor() { }

  exampleTrick: Trick = {
    name: 'ollie',
    variations: ['still', 'movement', 'jumping down'],
    variationsStats: {'still': [1, 1, 1], 'movement': [2, 0, 1], 'jumping down': [2, 0, 1]}
  };

  public getTrick(): Observable<Trick> {
    return of(this.exampleTrick);
  }
}
