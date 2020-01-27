import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';
import { ImageService } from 'src/app/image.service';
import { MetaTagService } from 'src/app/meta-tag.service';

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
    protected imageService: ImageService,
    private metaTagService: MetaTagService
  ) { }

  ngOnInit() {
    this.loadingSubscription = this.postsService.getIsLoading()
      .subscribe(aIsLoading => this.isLoading = aIsLoading);
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

  private addMetaInfo() {
    if (!this.posts || this.posts.length === 0) {
      return;
    }
    const currentPost = this.posts[this.posts.length - 1];
    let description = `${currentPost.category.label} posts of The Little Journal of Northeast India,`;
    for (const post of this.posts) {
      description += `${post.label},`;
    }
    this.metaTagService.addTags(
      {
        title: 'Little Journal NorthEast posts',
        description,
        image: currentPost.thumbnail.image.secureUrl,
        summaryImage: currentPost.thumbnail.image.secureUrl,
      }
    );
  }

  _fetchPosts(map: ParamMap) {
    const categoryId = map.get('categoryId');
    if (categoryId) {
      this.postSubscription = this.postsService
        .getPostsByCategory(categoryId)
        .subscribe(aPosts => {
          this.posts = aPosts;
          this.addMetaInfo();
        });
    } else {
      this.postSubscription = this.postsService
        .getPostsChanged()
        .subscribe(aPosts => {
          this.posts = aPosts;
          this.addMetaInfo();
        });
      // Get all posts
      this.postsService.getAllPosts();

    }
  }

}
