import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-photography-detail',
  template: `<app-common-post-detail [mode]=1 ></app-common-post-detail>`
})
export class PhotographyDetailComponent { }
