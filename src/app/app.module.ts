import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CalendarPComponent } from './calendar-p/calendar-p.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CycleComponent } from './cycle/cycle.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule, AppRoutingModule],
  declarations: [
    AppComponent,
    CalendarComponent,
    HeaderComponent,
    CalendarPComponent,
    DashboardComponent,
    CycleComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
