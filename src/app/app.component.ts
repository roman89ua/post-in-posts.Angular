import {Component, OnInit} from '@angular/core';
import {Post} from './post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  posts: Post[] = [
    {title: 'Post #2', text: 'Text of post #2', id: 2},
    {title: 'Post #1', text: 'Text of post #1', id: 1},
  ];
  ngOnInit(): void {
    setTimeout(() => {
      console.log('timeout');
      this.posts[0].title = 'Changed!';
    }, 5000);
  }

  updatePosts(post: Post): void{
    this.posts.unshift(post);
    (this.posts.length === 1) ? this.posts[0].id = 1 : this.posts[0].id = this.posts[1].id + 1;
  }
  remove(id: number): void{
    this.posts = this.posts.filter(post => post.id !== id);
  }

}
