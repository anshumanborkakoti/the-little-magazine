import { Component, OnInit, OnDestroy } from '@angular/core';
import { Issue } from 'src/app/models/issue.model';
import { IssueService } from './issues.service';
import { ImageService } from 'src/app/image.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit, OnDestroy {

  issues: Issue[];
  isLoading = false;

  constructor(private issueService: IssueService, protected imageService: ImageService) { }

  private issueSubscription = new Subscription();
  private isLoadingSubscription = new Subscription();

  ngOnInit() {
    this.isLoadingSubscription = this.issueService.getIsLoading().subscribe(aIsLoading => this.isLoading = aIsLoading);
    this.issueSubscription = this.issueService
      .getIssuesChanged()
      .subscribe(aIssues => {
        if (Array.isArray(aIssues)) {
          this.issues = aIssues;
        } else {
          this.issues = [];
        }
      });
    this.issueService.getAllIssues();
  }

  ngOnDestroy(): void {
    this.issueSubscription.unsubscribe();
    this.isLoadingSubscription.unsubscribe();
  }
}
