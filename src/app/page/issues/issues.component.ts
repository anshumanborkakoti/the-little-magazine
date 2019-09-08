import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/models/issue.model';
import { IssueService } from './issues .service';
import { ImageService } from 'src/app/image.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  issues: Issue[];

  constructor(private issueService: IssueService, protected imageService: ImageService) { }

  ngOnInit() {
    this.issues = this.issueService.getAllIssues();
  }
}
