import { Component, OnInit } from '@angular/core';
import { CertificateIconComponent } from "../icons/certificate-icon/certificate-icon.component";
import { CertificateItemComponent } from "./certificate-item/certificate-item.component";
import { Certificate } from './models/Certificate';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-certificates-section',
  standalone: true,
  imports: [CertificateIconComponent, CertificateItemComponent],
  templateUrl: './certificates-section.component.html',
  styleUrl: './certificates-section.component.css'
})
export class CertificatesSectionComponent implements OnInit {
  public certificates: Certificate[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getCertificates().subscribe(list => this.certificates = list);
  }
}