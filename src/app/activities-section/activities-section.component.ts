import { Component, OnInit } from '@angular/core';
import { ActivityIconComponent } from "../icons/activity-icon/activity-icon.component";
import { ActivityItemComponent } from "./activity-item/activity-item.component";
import { Activity } from './models/Activity';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-activities-section',
  standalone: true,
  imports: [ActivityIconComponent, ActivityItemComponent],
  templateUrl: './activities-section.component.html',
  styleUrl: './activities-section.component.css'
})
export class ActivitiesSectionComponent implements OnInit {

  public activities: Activity[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getActivities().subscribe(list => this.activities = list);
  }
}