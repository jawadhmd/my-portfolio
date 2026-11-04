import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from './experience-section/models/Experience';
import { ExperienceCategory } from './skills-section/models/ExperienceCategory';
import { Project } from './projects-section/models/Project';
import { Service } from './services-section/models/Service';
import { Course } from './courses-section/models/Course';
import { Certificate } from './certificates-section/models/Certificate';
import { Activity } from './activities-section/models/Activity';
import { HireInfo } from './hire-me-section/models/HireInfo';



export interface SocialLink {
  id: number;
  name: string;
  url: string;
}

export interface AboutResponse {
  fullName: string;
  position: string;
  bio: string;
  links: SocialLink[];
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getAbout(): Observable<AboutResponse> {
    return this.http.get<AboutResponse>(`${this.baseUrl}/about`);
  }

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.baseUrl}/experience`);
  }
  getSkills(): Observable<ExperienceCategory[]> {
  return this.http.get<ExperienceCategory[]>(`${this.baseUrl}/skills`);
}
getProjects(): Observable<Project[]> {
  return this.http.get<Project[]>(`${this.baseUrl}/projects`);
}
getServices(): Observable<Service[]> {
  return this.http.get<Service[]>(`${this.baseUrl}/services`);
}
getCourses(): Observable<Course[]> {
  return this.http.get<Course[]>(`${this.baseUrl}/courses`);
}
getCertificates(): Observable<Certificate[]> {
  return this.http.get<Certificate[]>(`${this.baseUrl}/certificates`);
}
getActivities(): Observable<Activity[]> {
  return this.http.get<Activity[]>(`${this.baseUrl}/activities`);
}
getHireInfo(): Observable<HireInfo> {
  return this.http.get<HireInfo>(`${this.baseUrl}/hire`);
}
}