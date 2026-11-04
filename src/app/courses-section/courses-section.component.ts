import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from "./course-card/course-card.component";
import { Course } from './models/Course';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-courses-section',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './courses-section.component.html',
  styleUrl: './courses-section.component.css'
})
export class CoursesSectionComponent implements OnInit {

  public courses: Course[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getCourses().subscribe(list => this.courses = list);
  }
}