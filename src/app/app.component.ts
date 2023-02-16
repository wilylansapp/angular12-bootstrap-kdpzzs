import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'component-overview';
  calendriersTypes = [
    { name: 'calendrier-p', type: 1 },
    { name: 'calendrier-a', type: 2 },
  ];
  constructor(private router: Router) {}
  onClickCalendrier(type) {
    console.log(type);
    this.router.navigateByUrl('calendar/personnalise');
  }
}
