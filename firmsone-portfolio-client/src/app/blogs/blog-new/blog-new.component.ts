import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Blog } from '../blog.model'
import { BlogsService } from '../../services/blogs.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.css']
})
export class BlogNewComponent implements OnInit {
  blog = new Blog;

  constructor(private blogsService: BlogsService) { }

  ngOnInit() {
  }
  createProposal(blog) {
    this.blogsService.createBlog(blog)
        .subscribe(
          data => { return true },
          error => {
            console.log("Error saving proposal");
            return Observable.throw(error);
          }
        );
  }
}