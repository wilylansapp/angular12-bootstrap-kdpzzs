import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-p',
  templateUrl: './calendar-p.component.html',
  styleUrls: ['./calendar-p.component.css'],
})
export class CalendarPComponent implements OnInit {
  @Input() params;
  constructor() {}

  ngOnInit() {}
}
