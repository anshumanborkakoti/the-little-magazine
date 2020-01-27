import { Component, OnInit, OnDestroy } from '@angular/core';
import { Issue } from 'src/app/models/issue.model';
import { IssueService } from './issues.service';
import { ImageService } from 'src/app/image.service';
import { Subscription } from 'rxjs';
import { MetaTagService } from 'src/app/meta-tag.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit, OnDestroy {

  issues: Issue[];
  isLoading = false;

  constructor(
    private issueService: IssueService,
    protected imageService: ImageService,
    private metaTagService: MetaTagService,
  ) { }

  private issueSubscription = new Subscription();
  private isLoadingSubscription = new Subscription();

  ngOnInit() {
    this.isLoadingSubscription = this.issueService.getIsLoading().subscribe(aIsLoading => this.isLoading = aIsLoading);
    this.issueSubscription = this.issueService
      .getIssuesChanged()
      .subscribe(aIssues => {
        if (Array.isArray(aIssues)) {
          this.issues = aIssues;
          if (aIssues.length > 0) {
            this.addMetaInfo(aIssues);
          }
        } else {
          this.issues = [];
        }
      });
    this.issueService.getAllIssues();
  }

  private addMetaInfo(aIssues: Issue[]) {
    let description = 'Latest issues of The Little Journal of Northeast India, ';
    for (const issue of aIssues) {
      description += `${issue.label},`;
    }
    const latestIssue = aIssues.find(aIssue => aIssue.latest);
    this.metaTagService.addTags(
      {
        title: 'Little Journal NorthEast latest issues',
        description,
        image: latestIssue.thumbnail.image.secureUrl,
        summaryImage: latestIssue.thumbnail.image.secureUrl,
      }
    )
  }

  ngOnDestroy(): void {
    this.issueSubscription.unsubscribe();
    this.isLoadingSubscription.unsubscribe();
  }
}
