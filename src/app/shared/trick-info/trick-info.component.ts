import { Component, Input, OnInit } from '@angular/core';
import { Chart} from 'ng2-chartjs2';
import { ActivatedRoute } from '@angular/router';
import { Trick } from '../../model/trick';

@Component({
  selector: 'app-trick-info',
  templateUrl: './trick-info.component.html',
  styleUrls: ['./trick-info.component.css']
})
export class TrickInfoComponent implements OnInit {
  @Input() trickData: Trick;
  @Input() trickName: string;
  // pie chart data of for specific trick variation, passed in the template
  private dataOfvariations: { [variation: string]: Chart.Dataset[] } = {};
  private dataOverall: Chart.Dataset[];

  constructor() { }

  ngOnInit() {
    //TODO make so that in here the trick service is invoked to request the trick object corresponding
    // to url parameter
    this.populateDataOfVariations();
    this.dataOverall = [
      {
        label: 'stats',
        data: this.getAverageData(),
        backgroundColor: [
          'green',
          'yellow',
          'red'
        ],

        borderColor: [
          'black',
          'black',
          'black'
        ],
        borderWidth: 1
      }
    ];
    console.log("TRICK name " + this.trickName);
  }

  populateDataOfVariations() {
    for ( let variation of this.trickData.variations ) {
      this.dataOfvariations[variation] = [
        {
          label: 'stats',
          data: this.trickData.variationsStats[variation],
          backgroundColor: [
            'green',
            'yellow',
            'red'
          ],

          borderColor: [
            'black',
            'black',
            'black'
          ],
          borderWidth: 1
        }
      ];
    }
  }

  getAverageData(): number[] {
    // get average stats for the trick given all the variations data
    let okCount: number = 0;
    let noCount: number = 0;
    let ishCount: number = 0;
    for (const variation of this.trickData.variations) {
      const currentStats = this.trickData.variationsStats[variation];
      okCount = okCount + currentStats[0];
      console.log(okCount);
      ishCount += currentStats[1];
      noCount += currentStats[2];
    }
    console.log(okCount);
    const total = okCount + noCount + ishCount;
    return([
      Math.round(total / okCount),
      Math.round(total / ishCount),
      Math.round(total / noCount)
    ]);
  }
}
