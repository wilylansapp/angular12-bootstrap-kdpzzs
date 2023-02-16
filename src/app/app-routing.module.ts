import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarPComponent } from './calendar-p/calendar-p.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CycleComponent } from './cycle/cycle.component';
import { ListComponent } from './list/list.component';

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    children: [
      {
        path: 'personnalise',
        component: CalendarPComponent,
      },
      {
        path: 'cycle',
        component: CycleComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
    ],
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
