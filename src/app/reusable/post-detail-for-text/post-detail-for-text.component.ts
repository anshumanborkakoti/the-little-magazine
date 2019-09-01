import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { BioModel } from '../bio/bio.model';
import { MastHeadService } from 'src/app/page/masthead/masthead/masthead.service';
import { Thumbnail } from 'src/app/models/thumbnail.model';
import { Image } from 'src/app/models/image.model';

@Component({
  selector: 'app-post-detail-for-text',
  templateUrl: './post-detail-for-text.component.html',
  styleUrls: ['./post-detail-for-text.component.scss']
})
export class PostDetailForTextComponent implements OnInit {

  @Input() post: Post;
  authors: BioModel[];

  constructor(private mastHeadService: MastHeadService) { }


  /**
   * TODO remove
   */
  getContent(): BioModel[] {
    return this.mastHeadService.getMastHeadContent()
      .map(masthead => {
        const name = masthead.bioHeader;
        const thumbnail = new Thumbnail();
        thumbnail.image = new Image();
        thumbnail.image.secureUrl = masthead.image;
        thumbnail.content = masthead.bioContent;
        const bio = new BioModel(name, thumbnail);
        return bio;
      }).slice(0, 1);
  }

  ngOnInit() {
    // this.authors = this.post.authors.map(author => {
    //   const name = author.name;
    //   const thumbnail = author.details.clone();
    //   const bio = new BioModel(name, thumbnail);
    //   return bio;
    // });
    this.authors = this.getContent();
  }

}
