import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-poetry-detail',
  template: `<app-common-post-detail [post]='post' [mode]=0 ></app-common-post-detail>`,
  styleUrls: ['./poetry-detail.component.scss']
})
export class PoetryDetailComponent implements OnInit {

  postId: string;
  post: Post;

  constructor(private activeRoute: ActivatedRoute, private postService: PostsService) { }

  ngOnInit() {
    this.postId = this.activeRoute.snapshot.queryParams['postid'];
    this.post = this.postService.getPost(this.postId);
  }

}
