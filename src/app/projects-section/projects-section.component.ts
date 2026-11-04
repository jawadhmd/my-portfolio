
import { ProjectCardComponent } from "./project-card/project-card.component";
import { Project } from './models/Project';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css'
})

export class ProjectsSectionComponent implements OnInit {
  projects: Project[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getProjects().subscribe(list => this.projects = list);
  }
}