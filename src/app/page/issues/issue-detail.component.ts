import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/models/issue.model';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from './issues.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-issue-detail',
  template: `<h1>{{issue.label}}</h1><iframe [src]='issueUrl'></iframe>`,
  styles: [`
            iframe {
            width: 80%;
            height: 80vh;
            margin-left: 10vw;
          }
        `]
})
export class IssueDetailComponent implements OnInit {

  issue: Issue;
  issueUrl: SafeResourceUrl;

  constructor(
    private activatedRoute: ActivatedRoute,
    private issueService: IssueService,
    protected sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const issueID = this.activatedRoute.snapshot.params['issueid'];
    this.issue = this.issueService.getIssue(issueID);
    this.issueUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.issue.pdfUrl);
  }

}
