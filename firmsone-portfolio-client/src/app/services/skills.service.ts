import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {commonHttpHeaders} from "./commonHttpHeaders";
@Injectable()
export class SkillsService {

  constructor(private http: Http) { }
  loadSkills(): Observable<any>{
    debugger
    return this.http.get('/api/skills', commonHttpHeaders())
    .map(res => res.json());

  }
}
