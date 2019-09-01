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

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPost(postId: string): Post {
    const image = new Image(makeid(20));
    image.publicId = 'sample.jpg';
    image.secureUrl = 'https://res.cloudinary.com/dcom6pwyq/image/upload/v1562595102/sample.jpg';
    const thumbnail1 = new Thumbnail(makeid(10), image, 'My poem', 'A great poem by me', '', 'My last stand');
    const content = `<p> so it’s like, we shouldn’t press our cheeks together<br> like we think / we know<br> because say i saw pen on my sock<br> this morning i looked and finally<br> let some noise pass through<br> lodge / into my ledgers,<br> take heart there<br> &amp; i thought that there was something<br> in the words it slipped down but then all of this</p> <p>&nbsp;</p>`;
    const author1 = new Author('Anshuman', 'dsdsad', makeid(10), makeid(10), 'fdsf@fdsf.com', 'dfd  dffd', [], new Thumbnail())
    const postDetail = new PostDetail(makeid(10), image, 'A cat playing', content, 'A cat footer', 'My poem on a cat playing');

    const post1 = new Post(
      [new Author('Anshuman')],
      [],
      false,
      thumbnail1,
      [postDetail],
      true,
      new Category('Poetry'),
      [new Issue('Issue 1', makeid(10), 'Issue 1')],
      'My last stand',
      makeid(10),
      new User()
    );
    return post1;
  }
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
      [new PostDetail()],
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
      [new PostDetail()],
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
      [new PostDetail()],
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
