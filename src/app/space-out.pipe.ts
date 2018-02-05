import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceOut'
})
export class SpaceOutPipe implements PipeTransform {

  transform(value: string): any {
    let building = '';
    for (let character of value) {
      building += character + ' ';
      building += '\t';
    }
    return building;
  }

}
