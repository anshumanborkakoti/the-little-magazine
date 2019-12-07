import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ImageService } from 'src/app/image.service';
import { PostsService } from '../posts/posts.service';
import { Post } from 'src/app/models/post.model';
import { Subscription } from 'rxjs';
import { IssueService } from '../issues/issues.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: [
    './man-page-breakpoints.component.scss',
    './main-page.component.scss'
  ]
})
export class MainPageComponent implements OnInit, OnDestroy {
  mainImageSource: string;
  postList: Post[];
  renderMainImage = false;
  renderList = false;
  isLoading = false;

  private postSubscription: Subscription;
  private issueSubscription: Subscription;
  private loadingSubscription: Subscription;


  constructor(
    private imageService: ImageService = null,
    private postService: PostsService,
    private issueService: IssueService
  ) { }

  ngOnInit() {
    this.loadingSubscription = this.issueService.getIsLoading().subscribe(aIsLoading => this.isLoading = aIsLoading);
    this.issueSubscription = this.issueService
      .getLatestIssue()
      .subscribe(aLatestIssue => {
        this.mainImageSource = this.imageService.getUnprefixedImage(aLatestIssue.thumbnail.image.publicId);
        this.renderMainImage = true;
        this.postSubscription = this.postService
          .getPostsByIssue(aLatestIssue.id)
          .subscribe(aPosts => {
            this.postList = aPosts;
            this.renderList = true;
          });
      });
  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
    this.issueSubscription.unsubscribe();
    this.loadingSubscription.unsubscribe();
  }
}
