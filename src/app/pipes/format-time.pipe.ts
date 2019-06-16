import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: string, args? : string ): string {
    let valid = value.length > 0;
    if(!valid) return value;

    const hhmm = value.split(':').map(t => {
      const num = Number(t);
      if(isNaN(num) && valid) valid = false;

      return num;
    });

    if(!hhmm.length){
      return value;
    }

    if(valid){
      let postfix = 'AM';
      let hh = hhmm[0];
      let mm = hhmm[1];
      if(hh >= 12){
        postfix = (hh===12 && mm == 0) ? 'noon' : 'PM';
        if(hh > 12){
          hh -= 12;
        }
      }
      return (args ? args : '').concat(hh.toString(), ':', mm.toString().length == 1 ? '0' : '', mm.toString(), ' ', postfix);
    }

    return value;
  }

}
