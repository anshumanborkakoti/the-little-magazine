import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/image.service';
import { PostsService } from '../posts/posts.service';
import { Post } from 'src/app/models/post.model';
import { Issues } from 'src/assets/mock-data/data.mock';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: [
    './man-page-breakpoints.component.scss',
    './main-page.component.scss'
  ]
})
export class MainPageComponent implements OnInit {
  mainImageSource: string;
  postList: Post[];

  constructor(private imageService: ImageService, private postService: PostsService) { }

  ngOnInit() {
    this.mainImageSource = this.imageService.getImage('main_2');
    // TODO remove after mock is removed
    const latestIssue = Issues.find(aIssue => {
      return aIssue.latest;
    })
    this.postList = this.postService.getPostsByIssue(latestIssue.id);
  }
}
