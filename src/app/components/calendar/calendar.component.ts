import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  today: Date = new Date();
  daysInMonth: number[] = [];
  blanks: number[] = [];
  month: number;
  year: number;
  weekDays: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  constructor() {
    this.month = this.today.getMonth();
    this.year = this.today.getFullYear();
    this.generateCalendar();
  }

  generateCalendar() {
    const firstDay = new Date(this.year, this.month, 1);
    // getDay: 0 (Sun) to 6 (Sat), but we want Monday as first column
    let startDay = firstDay.getDay();
    if (startDay === 0) startDay = 7; // Sunday should be last
    this.blanks = Array(startDay - 1).fill(0);
    const days = new Date(this.year, this.month + 1, 0).getDate();
    this.daysInMonth = Array.from({ length: days }, (_, i) => i + 1);
  }

  prevMonth() {
    if (this.year === 2025 && this.month === 0) {
      return;
    }
    if (this.month === 0) {
      this.month = 11;
      this.year--;
    } else {
      this.month--;
    }
    this.generateCalendar();
  }

  nextMonth() {
    if (this.year === 2025 && this.month === 11) {
      return;
    }
    if (this.month === 11) {
      this.month = 0;
      this.year++;
    } else {
      this.month++;
    }
    this.generateCalendar();
  }

  get monthName(): string {
    return new Date(this.year, this.month, 1).toLocaleString('default', { month: 'long' });
  }

  isToday(day: number): boolean {
    const now = new Date();
    return (
      day === now.getDate() &&
      this.month === now.getMonth() &&
      this.year === now.getFullYear()
    );
  }
} 