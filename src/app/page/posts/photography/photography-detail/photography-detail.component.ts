import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-photography-detail',
  template: `<app-common-post-detail [post]='post' [mode]=1 ></app-common-post-detail>`,
  styleUrls: ['./photography-detail.component.scss']
})
export class PhotographyDetailComponent implements OnInit {

  postId: string;
  post: Post;

  constructor(private activeRoute: ActivatedRoute, private postService: PostsService) { }

  ngOnInit() {
    this.postId = this.activeRoute.snapshot.queryParams['postid'];
    this.post = this.postService.getPost(this.postId);
  }
}
