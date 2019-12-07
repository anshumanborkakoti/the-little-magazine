import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';
import { ImageService } from 'src/app/image.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  isLoading = false;
  private querySubscription: Subscription;
  private postSubscription: Subscription;
  private loadingSubscription: Subscription;
  private categorySubscription: Subscription;

  constructor(
    private acRoute: ActivatedRoute,
    private postsService: PostsService,
    protected imageService: ImageService
  ) { }

  ngOnInit() {
    this.loadingSubscription = this.postsService.getIsLoading()
      .subscribe(aIsLoading => this.isLoading = aIsLoading);
    this._fetchPosts(this.acRoute.snapshot.queryParamMap);
    this.querySubscription = this.acRoute.queryParamMap.subscribe(qmap => {
      this._fetchPosts(qmap);
    });
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
    this.postSubscription.unsubscribe();
    this.loadingSubscription.unsubscribe();
    if (this.categorySubscription) {
      this.categorySubscription.unsubscribe();
    }

  }

  _fetchPosts(map: ParamMap) {
    const categoryId = map.get('categoryId');
    if (categoryId) {
      this.postSubscription = this.postsService
        .getPostsByCategory(categoryId)
        .subscribe(aPosts => this.posts = aPosts);
    } else {
      this.postSubscription = this.postsService
        .getPostsChanged()
        .subscribe(aPosts => this.posts = aPosts);
      // Get all posts
      this.postsService.getAllPosts();

    }
  }

}
