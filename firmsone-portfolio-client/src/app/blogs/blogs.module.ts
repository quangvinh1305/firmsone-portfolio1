import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogShowComponent } from './blog-show/blog-show.component';
import { MomentModule } from 'angular2-moment';
import { BlogNewComponent } from './blog-new/blog-new.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    MomentModule,
    FormsModule
  ],
  declarations: [BlogsComponent, BlogShowComponent, BlogNewComponent],
  exports: [BlogsComponent, BlogShowComponent, BlogNewComponent]
})
export class BlogsModule { }
