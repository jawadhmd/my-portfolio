
import { GithubButtonComponent } from "../buttons/github-button/github-button.component";
import { LinkedinButtonComponent } from "../buttons/linkedin-button/linkedin-button.component";
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [GithubButtonComponent, LinkedinButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})


export class HeroComponent implements OnInit {
  public fullName = '';
  public bio = '';
  public position = '';
  public githubUrl = '';
  public linkedinUrl = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAbout().subscribe(about => {
      this.fullName = about.fullName;
      this.bio = about.bio;
      this.position = about.position;
      this.githubUrl = about.links.find(l => l.name === 'GitHub')?.url ?? '';
      this.linkedinUrl = about.links.find(l => l.name === 'LinkedIn')?.url ?? '';
    });
  }
}