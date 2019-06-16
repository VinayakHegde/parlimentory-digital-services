import { Component } from '@angular/core';
import { EventListService } from '../services/event-list/event-list.service';
import { EventDetails } from '../interfaces/event-details';
import { CalendarService } from '../services/calendar-service/calendar-service.service';
import { Week } from '../interfaces/week';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [EventListService, CalendarService]
})
export class HomeComponent {
  public eventsList? : object;
  public eventDates? : string[];
  public event? : EventDetails;
  public today: Date = new Date();
  public recentWeek? : Week;

  public loading : boolean = true;
  public error : boolean = false;

  constructor(private eventService : EventListService, private calendarService : CalendarService) {
    this.event = null;
    this.calendarService.decorateCalendar();
    setTimeout(() => this.getEvents(this.calendarService.getWeek(this.today)), 1000);
  }

  getEvents(week : Week){
    if(this.recentWeek == week){
      return;
    }
    this.loading = true;
    this.recentWeek = week;
    this.eventService.getEvents(week).subscribe(result => {
      this.eventsList = this.processResult(result);

      this.eventDates = Object.keys(this.eventsList);

      this.loading = false;
      this.error = false;

    }, error => {
      console.error(error);
      this.recentWeek = null;
      this.eventsList = null;
      this.eventDates = null;
      this.loading = false;
      this.error = true;
    });
  }

  setEvent(event : EventDetails = null){
    this.event = event;
  }

  processResult(result : EventDetails[]){
    const events = result.sort((a,b) => {
      const D1 : Date = new Date(a.StartDate), 
        D2 : Date = new Date(b.StartDate);

      if(D1.getTime() === D2.getTime()) return a.SortOrder - b.SortOrder;

      if(D1 > D2) return 1;

      return -1;
    });
    const kvp = {};
    events.forEach((evt) => {
      if(!kvp.hasOwnProperty(evt.StartDate)){
        kvp[evt.StartDate] = [];
      }

      kvp[evt.StartDate].push(evt);
    });

    return kvp;
  }

  onChange(value : Date) : void{
    this.calendarService.decorateCalendar();
    this.getEvents(this.calendarService.getWeek(value));
  }
  
}
