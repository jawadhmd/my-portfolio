import { Component, OnInit } from '@angular/core';
import { ClockIconComponent } from "../icons/clock-icon/clock-icon.component";
import { EmailIconComponent } from "../icons/email-icon/email-icon.component";
import { CalendarIconComponent } from "../icons/calendar-icon/calendar-icon.component";
import { DollarIconComponent } from "../icons/dollar-icon/dollar-icon.component";
import { HireInfo } from './models/HireInfo';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-hire-me-section',
  standalone: true,
  imports: [ClockIconComponent, EmailIconComponent, CalendarIconComponent, DollarIconComponent],
  templateUrl: './hire-me-section.component.html',
  styleUrl: './hire-me-section.component.css'
})
export class HireMeSectionComponent implements OnInit {

  public hire: HireInfo = new HireInfo();

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getHireInfo().subscribe(info => this.hire = info);
  }
}