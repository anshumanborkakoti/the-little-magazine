import { Injectable } from '@angular/core';
import { Post, createPost } from 'src/app/models/post.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postsChanged = new Subject<Post[]>();
  private isLoading = new BehaviorSubject(false);
  private allPosts: Post[];
  private get API_URL() {
    return `${environment.api_url}/posts`;
  }

  constructor(private http: HttpClient) {
  }

  getPostsChanged(): Subject<Post[]> {
    return this.postsChanged;
  }

  getIsLoading(): BehaviorSubject<boolean> {
    return this.isLoading;
  }

  getPost(postId: string): Subject<Post> {
    this.isLoading.next(true);
    const subject = new Subject<Post>();
    if (this.allPosts && this.allPosts.length > 0) {
      const found = this.allPosts.find(aPost => {
        return aPost.id === postId;
      });
      if (found) {
        return new BehaviorSubject<Post>(found);
      }
    }
    this.http.get<{ message: string, posts: any[] }>
      (this.API_URL, {
        params: {
          'approved': 'true',
          'postid': postId || ''
        }
      })
      .pipe(
        map(result => {
          return {
            message: result.message,
            posts: result.posts.map(aPost => {
              return createPost(aPost);
            })
          };
        })
      ).subscribe(postData => {
        const [result] = postData.posts;
        subject.next(result);
        this.isLoading.next(false);
      }, error => {
        console.log(error.message);
        this.isLoading.next(false);
      });
    return subject;
  }

  getAllPosts(): void {
    this.isLoading.next(true);
    this.http.get<{ message: string, posts: any[] }>
      (this.API_URL, {
        params: {
          'approved': 'true'
        }
      })
      .pipe(
        map(result => {
          return {
            message: result.message,
            posts: result.posts.map(aPost => {
              return createPost(aPost);
            })
          };
        })
      ).subscribe(postData => {
        this.allPosts = postData.posts.slice();
        this.postsChanged.next(this.allPosts.slice());
        this.isLoading.next(false);
      }, error => {
        console.log(error.message);
        this.isLoading.next(false);
      });
  }

  getPostsByCategory(aCategoryId: string): Subject<Post[]> {
    const subject = new Subject<Post[]>();
    if (this.allPosts && this.allPosts.length > 0) {
      const result = this.allPosts.filter(aPost => {
        return aPost.category.id === aCategoryId;
      });
      if (result && result.length > 0) {
        return new BehaviorSubject<Post[]>(result);
      }
    }
    this.isLoading.next(true);
    this.http.get<{ message: string, posts: any[] }>
      (this.API_URL, {
        params: {
          'categoryid': aCategoryId,
          'approved': 'true'
        }
      })
      .pipe(
        map(result => {
          return {
            message: result.message,
            posts: result.posts.map(aPost => {
              return createPost(aPost);
            })
          };
        })
      ).subscribe(postData => {
        subject.next(postData.posts.slice());
        this.isLoading.next(false);
      }, error => {
        console.log(error.message);
        this.isLoading.next(false);
      });
    return subject;
  }

  getPostsByIssue(aIssueId: string): Subject<Post[]> {
    const subject = new Subject<Post[]>();
    if (this.allPosts && this.allPosts.length > 0) {
      const result = this.allPosts.filter(aPost => {
        const issue = aPost.issues.find(aIssue => {
          return aIssue.id === aIssueId;
        });
        return !!issue;
      });
      if (result && result.length > 0) {
        return new BehaviorSubject<Post[]>(result);
      }
    }
    this.isLoading.next(true);
    this.http.get<{ message: string, posts: any[] }>
      (this.API_URL, {
        params: {
          'issueids': [aIssueId],
          'approved': 'true'
        }
      })
      .pipe(
        map(result => {
          return {
            message: result.message,
            posts: result.posts.map(aPost => {
              return createPost(aPost);
            })
          };
        })
      ).subscribe(postData => {
        subject.next(postData.posts);
        this.isLoading.next(false);
      }, error => {
        console.log(error.message);
        this.isLoading.next(false);
      });
    return subject;
  }
}

