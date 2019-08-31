import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];

  constructor(private acRoute: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
    const categoryId = this.acRoute.snapshot.queryParamMap.get('categoryId');
    if (categoryId) {
      this.posts = this.postsService.getPostsByCategory(categoryId);
    }
  }

}
