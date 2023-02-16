import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  data = 'test header';
  constructor() {}
  ngOnInit() {
    this.data = history.state.itemcalendar;
    console.log('calendar', history.state);
  }
}
