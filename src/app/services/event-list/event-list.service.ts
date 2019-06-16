import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../../interfaces/config';
import { EventDetails } from '../../interfaces/event-details';
import { Week } from '../../interfaces/week';

@Injectable()
export class EventListService {
  private url : string;

  constructor(private http : HttpClient) {
    this.setUrl();
  }

  getEvents(week : Week){
    return this.http.get<EventDetails[]>(this.url.concat(this.getQueryString(week)));
  }

  private setUrl(){
    this.http.get<Config>('assets/config.json').subscribe(res => {
      this.url = res.eventListUrl;
    });
  }

  private getQueryString(week : Week) : string {
    return '&startdate='.concat(week.FirstDay, '&enddate=', week.LastDay);
  }

}
