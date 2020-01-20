import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Comment, createComment } from 'src/app/models/comment.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { cloneCmsClassArray } from 'src/app/common/util/utils';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private readonly api_url = `${environment.api_url}/comments`;
  private isSaved = new Subject<boolean>();
  private isLoading = new BehaviorSubject(false);
  constructor(
    private http: HttpClient
  ) { }

  getIsLoading(): BehaviorSubject<boolean> {
    return this.isLoading;
  }

  getIsSaved(): Subject<boolean> {
    return this.isSaved;
  }

  /**
   * Fetches all approved comments
   */
  getCommentsForPost(postId: string): Subject<Comment[]> {
    const commentsSub = new Subject<Comment[]>();
    this.isLoading.next(false);
    this
      .http
      .get<{ code: string, comments: any[] }>
      (`${this.api_url}/approved/${postId}`)
      .pipe(map(aResult => aResult.comments.map(aComment => createComment(aComment))))
      .subscribe(aComments => {
        commentsSub.next(cloneCmsClassArray(aComments));
        this.isLoading.next(true);
      },
        error => {
          this.isLoading.next(false);
          console.error(error);
          commentsSub.next([]);
        });
    return commentsSub;
  }

  /**
   * Saves a comment
   * @param aComment Comment to save
   */
  saveComment(aComment: Comment) {
    aComment.timestamp = new Date();
    this.isLoading.next(true);
    this.isSaved.next(false);
    this.http.post<{ code: string }>
      (`${this.api_url}`, aComment)
      .subscribe(aResult => {
        this.isLoading.next(false);
        this.isSaved.next(true);
      },
        error => {
          this.isLoading.next(false);
          this.isSaved.next(false);
        });
  }
}
