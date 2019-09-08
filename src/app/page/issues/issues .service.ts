import { Injectable } from '@angular/core';
import { Issue } from 'src/app/models/issue.model';
import { Issues } from 'src/assets/mock-data/data.mock';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  constructor() { }

  getIssueById(issueId: string): Issue {
    return Issues.find(aIssue => aIssue.id === issueId);
  }

  getAllIssues(): Issue[] {
    return Issues.slice();
  }
}
