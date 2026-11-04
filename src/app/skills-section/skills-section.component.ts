
import { SkillItemComponent } from "./skill-item/skill-item.component";
import { ExperienceCategory } from './models/ExperienceCategory';
import { WebDevelopmentIconComponent } from '../icons/web-development-icon/web-development-icon.component';
import { ProgrammingLanguagesIconComponent } from '../icons/programming-languages-icon/programming-languages-icon.component';
import { NgComponentOutlet } from '@angular/common';
import { DatabaseIconComponent } from '../icons/database-icon/database-icon.component';
import { MaintenanceIconComponent } from '../icons/maintenance-icon/maintenance-icon.component';
import { MobileIconComponent } from '../icons/mobile-icon/mobile-icon.component';
import { ShieldIconComponent } from '../icons/shield-icon/shield-icon.component';
import { CloudIconComponent } from '../icons/cloud-icon/cloud-icon.component';
import { GearIconComponent } from '../icons/gear-icon/gear-icon.component';
import { BugIconComponent } from '../icons/bug-icon/bug-icon.component';
import { SinglePersonelIconComponent } from '../icons/single-personel-icon/single-personel-icon.component';
import { DoublePersonelIconComponent } from '../icons/double-personel-icon/double-personel-icon.component';
import { Component, Injector, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [SkillItemComponent, NgComponentOutlet],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css'
})
export class SkillsSectionComponent implements OnInit {

  allSkills: ExperienceCategory[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getSkills().subscribe(list => this.allSkills = list);
  }

  iconMap: { [key: string]: any } = {
    // ...خلّيها متل ما هي، ما تغيّر شي
  };
}
