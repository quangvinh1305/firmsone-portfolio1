import { Component, OnInit } from '@angular/core';
import {SkillsService} from "../services/skills.service";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private blogs = []

  constructor(private _skillsService: SkillsService) { 
      }

  ngOnInit() {
    this._skillsService.loadSkills().subscribe(console.log);
  }

}
