import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Blog } from '../blog.model';
import { BlogsService } from '../../services/blogs.service';
import { MomentModule } from 'angular2-moment';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  providers: [BlogsService, MomentModule]
})
export class BlogsComponent implements OnInit {


  blogs: Blog[];
  errorMessage: string;
  mode = "Observable";

  constructor(
    private blogService: BlogsService,
    private router: Router
  ) {}

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getBlogs());
  }

  getBlogs() {
    this.blogService.getBlogs()
        .subscribe(
          blogs => this.blogs = blogs,
          error => this.errorMessage = <any>error
        );
  }

  goToShow(blog: Blog): void {
    let link = ['/blogs', blog.id];
    this.router.navigate(link);
  }
}
