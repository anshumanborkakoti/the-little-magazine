import { Component, OnInit, Input, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { BioModel } from '../bio/bio.model';
import { DETAIL_COMPONENT_MODES } from 'src/app/common/util/constants';
import { PostsService } from 'src/app/page/posts/posts.service';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/image.service';
import { Subscription } from 'rxjs';
import { MetaTagService } from 'src/app/meta-tag.service';

@Component({
  selector: 'app-common-post-detail',
  templateUrl: './common-post-detail.component.html',
  styleUrls: ['./common-post-detail.component.scss']
})
export class CommonPostDetailComponent implements OnInit, OnDestroy {

  @Input() post: Post;
  @Input() mode: number;

  authors: BioModel[];
  isPhotoMode: boolean;
  renderDetail = false;
  isLoading = false;

  private postSubscription = new Subscription();
  private loadingSubscription = new Subscription();

  constructor(
    private postService: PostsService,
    private acRoute: ActivatedRoute,
    private imageService: ImageService,
    private metaTagService: MetaTagService
  ) { }


  ngOnInit() {
    const postId = this.acRoute.snapshot.params['postid'];
    this.loadingSubscription = this.postService
      .getIsLoading()
      .subscribe(aIsloading => this.isLoading = aIsloading);
    this.postSubscription = this
      .postService
      .getPost(postId)
      .subscribe(aPost => {
        this.post = aPost;
        this.addMetaInfo(aPost);
        this.authors = this.post.authors.map(author => {
          const name = author.name;
          const thumbnail = author.details.clone();
          thumbnail.image.secureUrl = this.imageService.getUnprefixedImage(thumbnail.image.publicId);
          const bio = new BioModel(name, thumbnail);
          return bio;
        });
        this.renderDetail = true;
      });
    this.isPhotoMode = DETAIL_COMPONENT_MODES.PHOTO === this.mode;
  }

  addMetaInfo(aPost: Post) {
    let description = aPost.detail[0].content;
    if (aPost.detail[0].content.length > 150) {
      description = aPost.detail[0].content.substring(0, 150) + '...';
    }
    this.metaTagService.addTags({
      title: aPost.label,
      description,
      image: aPost.content.image.secureUrl,
      summaryImage: aPost.thumbnail.image.secureUrl
    });
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
    this.loadingSubscription.unsubscribe();
  }

}
