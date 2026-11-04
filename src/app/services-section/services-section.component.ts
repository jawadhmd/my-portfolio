import { Component, OnInit } from '@angular/core';
import { ServiceCardComponent } from "./service-card/service-card.component";
import { WebDevelopmentIconComponent } from "../icons/web-development-icon/web-development-icon.component";
import { MaintenanceIconComponent } from "../icons/maintenance-icon/maintenance-icon.component";
import { Service } from './models/Service';
import { GearIconComponent } from '../icons/gear-icon/gear-icon.component';
import { BugIconComponent } from '../icons/bug-icon/bug-icon.component';
import { NgComponentOutlet } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [ServiceCardComponent, MaintenanceIconComponent, NgComponentOutlet],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.css'
})
export class ServicesSectionComponent implements OnInit {

  public services: Service[] = [];

  iconMap: { [key: string]: any } = {
    webDevelopment: WebDevelopmentIconComponent,
    automatedTesting: GearIconComponent,
    softwareTesting: BugIconComponent
  };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getServices().subscribe(list => this.services = list);
  }
}