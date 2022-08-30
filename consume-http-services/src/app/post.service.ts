import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import 'rxjs/add/operator/throw';

@Injectable()
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post: any) {
    // return Observable.throw new Error("");
    return this.http.post(this.url, JSON.stringify(post)) ;
  }

  updatePost(post: any) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true}));
  }

  deletePost(id: any) {
    return this.http.delete(this.url + '/' + id);
  }

}
