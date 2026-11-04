
import { ExperienceItemComponent } from "./experience-item/experience-item.component";
import { Experience } from './models/Experience';
import { ExperienceIconComponent } from "../icons/experience-icon/experience-icon.component";
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [ExperienceItemComponent, ExperienceIconComponent],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.css'
})
 export class ExperienceSectionComponent implements OnInit {
  allExperienceList: Experience[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getExperience().subscribe(list => this.allExperienceList = list);
  }
}


