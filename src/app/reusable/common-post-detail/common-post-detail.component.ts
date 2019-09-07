import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { BioModel } from '../bio/bio.model';
import { DETAIL_COMPONENT_MODES } from 'src/app/common/util/constants';
import { PostsService } from 'src/app/page/posts/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-common-post-detail',
  templateUrl: './common-post-detail.component.html',
  styleUrls: ['./common-post-detail.component.scss']
})
export class CommonPostDetailComponent implements OnInit {

  @Input() post: Post;
  @Input() mode: number;

  authors: BioModel[];
  isPhotoMode: boolean;

  constructor(private postService: PostsService, private acRoute: ActivatedRoute) { }


  ngOnInit() {
    const postId = this.acRoute.snapshot.params['postid'];
    this.post = this.postService.getPost(postId);
    this.authors = this.post.authors.map(author => {
      const name = author.name;
      const thumbnail = author.details.clone();
      const bio = new BioModel(name, thumbnail);
      return bio;
    });

    this.isPhotoMode = DETAIL_COMPONENT_MODES.PHOTO === this.mode;
  }

}
