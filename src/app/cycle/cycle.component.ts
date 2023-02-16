import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css'],
})
export class CycleComponent implements OnInit {
  @Input() params;
  constructor() {}

  ngOnInit() {}
}
