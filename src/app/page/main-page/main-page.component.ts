import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ImageService } from 'src/app/image.service';
import { PostsService } from '../posts/posts.service';
import { Post } from 'src/app/models/post.model';
import { Subscription } from 'rxjs';
import { IssueService } from '../issues/issues.service';
import { MetaTagService } from 'src/app/meta-tag.service';

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
  tags = '';
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
    private issueService: IssueService,
    private metaTagService: MetaTagService
  ) { }

  ngOnInit() {
    this.loadingSubscription = this.postService.getIsLoading().subscribe(aIsLoading => this.isLoading = aIsLoading);
    this.issueSubscription = this.issueService
      .getLatestIssue()
      .subscribe(aLatestIssue => {
        this.mainImageSource = this.imageService.getUnprefixedImage(aLatestIssue.thumbnail.image.publicId);
        if (Array.isArray(aLatestIssue.thumbnail.image.tags)) {
          this.tags = aLatestIssue.thumbnail.image.tagsAsString;
        }
        this.renderMainImage = true;
        this.postSubscription = this.postService
          .getPostsByIssue(aLatestIssue.id)
          .subscribe(aPosts => {
            this.postList = aPosts;
            this.renderList = true;
            this.addMetaInfo();
          });
      });
  }


  private addMetaInfo() {
    this.metaTagService.addTags(
      {
        title: 'Little Journal NorthEast latest issues',
        description: 'A journal featuring elegant art and literary content from northeast India',
        image: this.mainImageSource,
        summaryImage: this.mainImageSource,
      }
    );
  }
  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
    this.issueSubscription.unsubscribe();
    this.loadingSubscription.unsubscribe();
  }
}
