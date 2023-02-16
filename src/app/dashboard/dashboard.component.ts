import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  title = 'component-overview';
  calendriersTypes = [
    { name: 'personnalise', type: 1, id: 123456 },
    { name: 'cycle', type: 2, id: 789456 },
  ];
  constructor(private router: Router) {}
  onClickCalendrier(itemcalendar) {
    const navigationExtras: NavigationExtras = {
      state: {
        itemcalendar,
      },
    };
    if (itemcalendar.type === 1) {
      this.router.navigate(['/calendar/personnalise'], navigationExtras);
    } else {
      this.router.navigate(['/calendar/cycle'], navigationExtras);
    }
  }
}
