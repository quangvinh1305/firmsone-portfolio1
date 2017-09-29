import { Component, OnInit } from '@angular/core';
import {SkillsService} from "../services/skills.service";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private skills = []
  public isCollapsed = true;
  public isCollapsedJob = true;
  public isCollapsedEducation = true;
  public isCollapsedCourse = true;
  public isCollapsedPress = true;
  constructor(private _skillsService: SkillsService) { 
      }

  ngOnInit() {
    this._skillsService.loadSkills().subscribe(skills => this.skills = skills);
  }

}
