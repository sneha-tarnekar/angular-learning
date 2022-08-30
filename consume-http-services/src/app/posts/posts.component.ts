import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts: any;

  constructor(private service: PostService) {
   
  }
  
  ngOnInit() {
   this.service.getPosts()
    .subscribe(response => {
      this.posts = response;
    }, error => {
      alert('An unexpected error occurred.');
      console.log(error);
    })
  }

  createPost(input: HTMLInputElement) {
    let post: any = {title: input.value};
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.createPost(post)
    .subscribe(response => {
      console.log(response);
      post.id = response;
    }, 
    (error: Response) => {
      if(error.status === 400)
        alert('Bad request.');
      else {
        alert('An unexpected error occurred.');
      console.log(error);
      }
    });
  }

  updatePost(post: any) {
    this.service.updatePost(post)
    .subscribe(response => {
      console.log(response);
    })
    // this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post: any) {
    this.service.deletePost(post.id)
    .subscribe();
  }
 
}
