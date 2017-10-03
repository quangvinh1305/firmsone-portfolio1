import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {BlogsComponent} from './blogs/blogs/blogs.component';
import {TechNewsComponent} from './tech-news/tech-news.component';
import { BlogShowComponent } from './blogs/blog-show/blog-show.component';
import { BlogNewComponent } from  './blogs/blog-new/blog-new.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'tech_news', component: TechNewsComponent },
  { path: 'blogs/:id', component: BlogShowComponent },
  { path: 'blogs/new', component: BlogNewComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}