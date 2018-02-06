import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Trick } from './model/trick';

@Injectable()
export class TrickService {

  constructor() { }

  ollieData: Trick = {
    name: 'ollie',
    variations: ['still', 'movement', 'jumping down'],
    variationsStats: {'still': [1, 1, 1], 'movement': [2, 0, 1], 'jumping down': [2, 0, 1]}
  };
  flipData: Trick = {
    name: 'flip',
    variations: ['still', 'movement', 'jumping down'],
    variationsStats: {'still': [1, 1, 1], 'movement': [20, 0, 5], 'jumping down': [2, 10, 0]}
  };
  backSideShuvitData: Trick = {
    name: 'back side shuvit',
    variations: ['still', 'movement', 'jumping down'],
    variationsStats: {'still': [1, 1, 1], 'movement': [0, 0, 0], 'jumping down': [2, 0, 1]}
  };
  tricks: Trick[] = [this.ollieData, this.flipData, this.backSideShuvitData];

  public getTrickByName(name: string): Observable<Trick> {
    for ( let trick of this.tricks ) {
      if (trick.name.toLowerCase() == name.toLowerCase()) {
        return of(trick);
      }
    }
  }

  public getAllTrickName() {
    let collectingTricks: string[] = [];
    for ( const trick of this.tricks ) {
      collectingTricks.push(trick.name);
    }
    return of(collectingTricks);
  }
}
