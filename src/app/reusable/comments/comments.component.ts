import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentsService } from './comments.service';
import { Comment } from 'src/app/models/comment.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, OnDestroy {

  @ViewChild('f', { static: true }) formElement: NgForm;
  @Input() postId: string;

  showSavedInfo = false;
  isLoading = false;
  commentsForPost: Comment[];
  showSaveProgress = false;

  private loadingSubscription: Subscription;
  private savedSubscription: Subscription;
  private getCommentsSub: Subscription;

  constructor(private commentService: CommentsService) { }

  ngOnInit() {
    this.loadingSubscription = this.commentService.getIsLoading().subscribe(aIsLoading => {
      this.isLoading = aIsLoading;
    });
    this.savedSubscription = this.commentService.getIsSaved().subscribe(() => {
      this.formElement.resetForm();
      setTimeout(() => {
        this.showSavedInfo = false;
      }, 10000);
      this.showSaveProgress = false;
      this.showSavedInfo = true;
    });
    this.getCommentsSub = this.commentService.getCommentsForPost(this.postId).subscribe(aComments => {
      this.commentsForPost = [...aComments];
    });
  }

  ngOnDestroy(): void {
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
    if (this.savedSubscription) {
      this.savedSubscription.unsubscribe();
    }
    if (this.getCommentsSub) {
      this.getCommentsSub.unsubscribe();
    }
  }

  onFormSubmit() {
    if (this.formElement.form.status === 'VALID') {
      const { author, comment } = this.formElement.form.value;
      this.commentService.saveComment(new Comment(null, this.postId, author, comment));
      this.showSaveProgress = true;
    }
  }

}
