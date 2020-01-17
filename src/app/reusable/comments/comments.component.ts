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

  private loadingSubscription: Subscription;
  private savedSubscriptiom: Subscription;

  constructor(private commentService: CommentsService) { }

  ngOnInit() {
    this.loadingSubscription = this.commentService.getIsLoading().subscribe();
    this.savedSubscriptiom = this.commentService.getIsSaved().subscribe(() => {
      this.formElement.resetForm();
    });

  }

  ngOnDestroy(): void {
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
    if (this.savedSubscriptiom) {
      this.savedSubscriptiom.unsubscribe();
    }
  }

  onFormSubmit() {
    console.log(this.formElement);
    if (this.formElement.form.status === 'VALID') {
      const { author, comment } = this.formElement.form.value;
      this.commentService.saveComment(new Comment(null, this.postId, author, comment));
    }
  }

}
