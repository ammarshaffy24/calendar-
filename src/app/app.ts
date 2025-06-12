import { Component } from '@angular/core';
import { CalendarComponent } from './components/calendar/calendar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalendarComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}
