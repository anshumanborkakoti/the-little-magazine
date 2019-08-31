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

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getAllPosts(): Post[] {
    return [];
  }

  getPostsByCategory(aCategoryId: string): Post[] {
    const image = new Image(makeid(20));
    image.publicId = 'samples/animals/kitten-playing.gif';
    image.secureUrl = 'https://res.cloudinary.com/dcom6pwyq/image/upload/v1562595102/sample.jpg';
    const thumbnail1 = new Thumbnail(makeid(10), image, 'My poem', 'A great poem by me', '', 'My last stand');
    const thumbnail2 = new Thumbnail(makeid(10), image, 'My poem', 'A great poem by me', '', 'My last stand2');
    const thumbnail3 = new Thumbnail(makeid(10), image, 'My poem', 'A great poem by me', '', 'My last stand3');
    const post1 = new Post(
      [new Author('Anshuman')],
      [],
      false,
      thumbnail1,
      [new PostDetail],
      true,
      new Category('Poetry'),
      [new Issue()],
      'My last stand',
      makeid(10),
      new User()
    );
    const post2 = new Post(
      [new Author('Anshuman2')],
      [],
      false,
      thumbnail2,
      [new PostDetail],
      true,
      new Category('Poetry'),
      [new Issue()],
      'My last stand2',
      makeid(10),
      new User()
    );
    const post3 = new Post(
      [new Author('Anshuman3')],
      [],
      false,
      thumbnail3,
      [new PostDetail],
      true,
      new Category('Poetry'),
      [new Issue()],
      'My last stand2',
      makeid(10),
      new User()
    )
    return [
      post1, post2, post3
    ];
  }

  getPostsByIssue(aIssueId: string): Post[] {
    return [];
  }
}
