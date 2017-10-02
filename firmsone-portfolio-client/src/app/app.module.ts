import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import { AppComponent } from './app.component';
import { Routes,
         RouterModule }         from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import {SkillsService} from './services/skills.service'
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LayoutModule} from './layout/layout.module';
import { ContactComponent } from './contact/contact.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { BlogsComponent } from './blogs/blogs.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TechNewsComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(), 
    NgbModule.forRoot(),
    LayoutModule
  ],
  providers: [Angular2TokenService, SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
