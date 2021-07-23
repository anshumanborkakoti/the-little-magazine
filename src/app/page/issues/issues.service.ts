import { Injectable, OnDestroy } from '@angular/core';
import { Issue } from 'src/app/models/issue.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { createThumbnail } from 'src/app/models/thumbnail.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IssueService implements OnDestroy {
  private issuesChanged = new Subject<Issue[]>();
  private isLoading = new BehaviorSubject(true);
  private allIssues: Issue[];
  private isSaved = new Subject<boolean>();
  private isDeleted = new Subject<boolean>();

  constructor(private http: HttpClient) {
  }

  getIssuesChanged(): Subject<Issue | Issue[]> {
    return this.issuesChanged;
  }

  getIsLoading(): BehaviorSubject<boolean> {
    return this.isLoading;
  }

  getIsSaved(): Subject<boolean> {
    return this.isSaved;
  }

  getIsDeleted(): Subject<boolean> {
    return this.isDeleted;
  }

  private get API_URL() {
    return `${environment.api_url}/issues`;
  }

  getAllIssues(): void {
    this.isLoading.next(true);
    this.http.get<{ message: string, issues: any }>
      (this.API_URL, {
        params: {
          'published': 'true'
        }
      })
      .pipe(
        map(result => {
          return {
            issues: result.issues.map(issue => {
              return new Issue(
                issue.name,
                issue._id,
                issue.label,
                createThumbnail(issue.thumbnail),
                issue.published,
                issue.archived,
                issue.pdfUrl,
                issue.latest
              );
            })
          };
        })
      ).subscribe(issueData => {
        this.allIssues = issueData.issues.slice();
        this.issuesChanged.next(this.allIssues.slice());
        this.isLoading.next(false);
        this.isSaved.next(true);
      }, error => {
        console.log(error.message);
        this.isLoading.next(false);
        this.isSaved.next(false);
      });
  }

  getIssue(id: string): Issue {
    return this.allIssues.find(aIssue => aIssue.id === id);
  }

  getLatestIssue(): Subject<Issue> {
    const subject = new Subject<Issue>();
    this.isLoading.next(true);
    this.http.get<{ message: string, issues: any }>
      (this.API_URL, {
        params: {
          'latest': 'true',
          'published': 'true'
        }
      })
      .pipe(
        map(result => {
          return {
            issues: result.issues.map(issue => {
              return new Issue(
                issue.name,
                issue._id,
                issue.label,
                createThumbnail(issue.thumbnail),
                issue.published,
                issue.archived,
                issue.pdfUrl,
                issue.latest
              );
            })
          };
        })
      ).subscribe(issueData => {
        subject.next(issueData.issues.slice()[0]);
        this.isLoading.next(false);
        this.isSaved.next(true);
      }, error => {
        console.log(error.message);
        this.isLoading.next(false);
        this.isSaved.next(false);
      });
    return subject;
  }
  ngOnDestroy() {
    this.issuesChanged = null;
  }
}
