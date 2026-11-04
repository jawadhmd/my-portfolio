import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HeroComponent } from "./hero/hero.component";
import { ExperienceSectionComponent } from "./experience-section/experience-section.component";
import { SkillsSectionComponent } from "./skills-section/skills-section.component";
import { ProjectsSectionComponent } from "./projects-section/projects-section.component";
import { ServicesSectionComponent } from "./services-section/services-section.component";
import { CoursesSectionComponent } from "./courses-section/courses-section.component";
import { CertificatesSectionComponent } from "./certificates-section/certificates-section.component";
import { ActivitiesSectionComponent } from "./activities-section/activities-section.component";
import { HireMeSectionComponent } from "./hire-me-section/hire-me-section.component";
import { FooterComponent } from "./footer/footer.component";
import { RevealDirective } from './reveal.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, ExperienceSectionComponent, SkillsSectionComponent, ProjectsSectionComponent, ServicesSectionComponent, CoursesSectionComponent, CertificatesSectionComponent, ActivitiesSectionComponent, HireMeSectionComponent, FooterComponent, RevealDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-portfolio';
}