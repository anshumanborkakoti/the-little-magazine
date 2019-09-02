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
    image.publicId = 'sample';
    image.secureUrl = 'https://res.cloudinary.com/dcom6pwyq/image/upload/v1562595102/sample.jpg';
    const thumbnail1 = new Thumbnail(makeid(10), image, 'My poem', 'A great poem by me', '', 'My last stand');
    const content = `<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>`;
    // const content = `<div>The night Jona lost her mind,</div>
    // <div>a red moon hung above her window</div>
    // <div>and voices from the forest behind</div>
    // <div>called out to her, singing songs</div>
    // <div>of the dead.</div><div>&nbsp;</div><div>
    // It all started when she had gone</div><div>
    // to Urmee&rsquo;s house next door,</div><div>
    // only to find her blood paint</div><div>
    // her kitchen floor a whimsical red,</div><div>
    // and Urmee lying on the ground</div><div>with a
    // cold winter stare.</div><div>&nbsp;</div><div>
    // The men with the badges</div><div>had several versions
    //  stories &mdash;</div><div>the one where Urmee waited
    //  for her</div><div>lover&rsquo;s car to pull up the driveway</div>
    //  <div>under starless grey skies;</div><div>or when she strolled with him</div>
    //  <div>on the other side of town &mdash;</div>
    //  <div>along sullied cafes and bars,</div>
    //  <div>that were open for the night.</div>
    //  <div>His hand wrapped around her waist</div>
    //  <div>and head buried in a trilby hat.</div><div>&nbsp;</div>
    //  <div>The night Jona lost her mind,</div><div>
    //  she woke up to the sound</div><div>of a Vedette drive by,</div>
    //  <div>and her husband&rsquo;s side of the bed</div>
    //  <div>cold and hollow, like a sleeping ghost.</div>
    //  <div>&nbsp;</div><div>Down the wooden staircase,
    //  she tiptoed</div><div>and found him sitting still by
    //  the fire,</div><div>his hand holding a Polaroid of Urmee
    //  &mdash;</div><div>her dark curls framing her moon-shaped face;</div>
    //  <div>his fingers slowly moved across it</div><div>like
    //  he was really there and her eyes gazed,</div><div>deep
    //   pools of sea, watching,</div><div>never looking away.</div>`;
    const author1 = new Author('Anshuman', 'dsdsad', makeid(10), makeid(10), 'fdsf@fdsf.com', 'dfd  dffd', [], new Thumbnail())
    const postDetail = new PostDetail(makeid(10), image, `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      content, 'A cat footer', 'My poem on a cat playing');
    const postDetai2 = new PostDetail(makeid(10), image, `Lorem Ipsum is simply dummy `,
      content, 'A cat footer', 'My poem on a cat playing');
    const postDetai3 = new PostDetail(makeid(10), image, `Lorem Ipsum is simply dummy dummy text of the printing and typesetting industry. `,
      content, 'A cat footer', 'My poem on a cat playing');
    const postDetail4 = new PostDetail(makeid(10), image, `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      content, 'A cat footer', 'My poem on a cat playing');

    const post1 = new Post(
      [new Author('Anshuman')],
      [],
      false,
      thumbnail1,
      [postDetail, postDetai2, postDetai3, postDetail4],
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
      new Category('Essays'),
      [new Issue()],
      'This is an essay',
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
      new Category('Photographs'),
      [new Issue()],
      'These are photos',
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
