import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { Author } from 'src/app/models/author.model';
import { Edit } from 'src/app/models/edit.model';
import { User } from 'src/app/models/user.model';
import { Thumbnail } from 'src/app/models/thumbnail.model';
import { PostDetail } from 'src/app/models/post-detail.model';
import { Category } from 'src/app/models/category.model';
import { Issue } from 'src/app/models/issue.model';
import { makeid } from 'src/app/common/util/utils';
import { Image } from 'src/app/models/image.model';
import { BioModel } from 'src/app/reusable/bio/bio.model';
import { MastHeadService } from '../masthead/masthead/masthead.service';
import { All_Posts } from 'src/assets/mock-data/data.mock';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPost(postId: string): Post {
    return All_Posts.find(aPost => {
      return aPost.id === postId;
    });
  }
  getAllPosts(): Post[] {
    return All_Posts;
  }

  getPostsByCategory(aCategoryId: string): Post[] {
    return All_Posts.filter(aPost => {
      return aPost.category.id === aCategoryId;
    });
  }

  getPostsByIssue(aIssueId: string): Post[] {
    return [];
  }
}
