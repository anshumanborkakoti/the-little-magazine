import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private querySubscription: Subscription;

  constructor(private acRoute: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
    this._fetchPosts(this.acRoute.snapshot.queryParamMap);
    this.querySubscription = this.acRoute.queryParamMap.subscribe(qmap => {
      this._fetchPosts(qmap);
    });
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }

  _fetchPosts(map: ParamMap) {
    const categoryId = map.get('categoryId');
    if (categoryId) {
      this.posts = this.postsService.getPostsByCategory(categoryId);
    } else {
      // Get all posts
      this.posts = this.postsService.getAllPosts();
    }
  }

}
