import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Blog } from '../blog.model';
import { BlogsService } from '../../services/blogs.service';
@Component({
  selector: 'app-blog-show',
  templateUrl: './blog-show.component.html',
  styleUrls: ['./blog-show.component.css'],
  providers: [BlogsService]
})

export class BlogShowComponent implements OnInit {

  constructor(private http: Http,
    private blogsService: BlogsService,
    private route: ActivatedRoute) { }
  @Input()
  blog: Blog;
  ngOnInit() {
    let proposalRequest = this.route.params
        .flatMap((params: Params) =>
          this.blogsService.getBlog(+params['id']));
    proposalRequest.subscribe(response => this.blog = response.json());
  }

}