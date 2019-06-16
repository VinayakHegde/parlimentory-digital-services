import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventDetails } from '../interfaces/event-details';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  @Input() details : EventDetails[];
  @Input() header : string;

  @Output() callback : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  showMore(event){
    this.callback.emit(event);
  }

}