import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Blog } from '../blogs/blog.model';

@Injectable()
export class BlogsService {
  private blogsUrl = 'http://localhost:3000/api/blogs';
  constructor(private http: Http) { }
  getBlogs(): Observable<Blog[]> {
    return this.http.get(this.blogsUrl)
                    .map((response: Response) => <Blog[]>response.json())
                    .catch(this.handleError);
  }

  getBlog(id: number) {
    return this.http.get(this.blogsUrl + "/" + id + '.json');
  }

  createBlog(blog) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(this.blogsUrl, JSON.stringify(blog), { headers: headers}).map((res: Response) => res.json());
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}