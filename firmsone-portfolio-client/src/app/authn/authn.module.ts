import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { Angular2TokenService } from 'angular2-token';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SignupComponent]
})
export class AuthnModule { }
