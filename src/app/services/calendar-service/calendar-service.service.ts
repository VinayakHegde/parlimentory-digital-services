import { Injectable } from '@angular/core';
import { Week } from '../../interfaces/week';

@Injectable()
export class CalendarService {

  constructor() { }

  decorateCalendar(){
    setTimeout(()=>{
      const curWeek = document.querySelector('.k-calendar .k-today'),
        oldRow = document.querySelector('.k-calendar tr.k-state-selected'),
        currentCell = document.querySelector('.k-calendar td.k-state-selected');
        
      if(curWeek){
        curWeek.innerHTML = 'Current Week';
      }

      if(oldRow) {
        oldRow.classList.remove('k-state-selected');
      }

      if(currentCell) {
        currentCell.parentElement.classList.add('k-state-selected');
      }
    }, 100);
    
  }

  getWeek(date : Date = new Date()) : Week {
    const day : number = date.getDay();
    
    return {
      FirstDay : this.getDateFrom(new Date(date.getTime()), -day).toISOString(),
      LastDay : this.getDateFrom(new Date(date.getTime()) , (6-day)).toISOString()
    }    
      
  }

  private getDateFrom(date : any, weekNumber : number = 0) : Date {
    return new Date(date.setDate(date.getDate() + weekNumber));
  }

}
