import { Category } from "src/app/models/category.model";
import { makeid } from "src/app/common/util/utils";
import { Thumbnail } from "src/app/models/thumbnail.model";
import { Image } from "src/app/models/image.model";
import { Post } from "src/app/models/post.model";
import { Author } from "src/app/models/author.model";
import { PostDetail } from "src/app/models/post-detail.model";
import { Issue } from "src/app/models/issue.model";

export const Issues = [
  new Issue(
    'September 2019',
    makeid(20),
    'September 2019'
  )
];

export const Category_Essays = new Category(
  'Essays',
  makeid(20),
  'Essays',
  new Thumbnail(
    makeid(20),
    new Image(
      'Essays_Folder_Eugenio_Mazzone_eugi1492_xmv6yu',
      'jpg',
      [],
      'https://res.cloudinary.com/dcom6pwyq/image/upload/v1567701996/tljnesandbox/Categories/Essays_Folder_Eugenio_Mazzone_eugi1492_xmv6yu.jpg',
      'http://res.cloudinary.com/dcom6pwyq/image/upload/v1567701996/tljnesandbox/Categories/Essays_Folder_Eugenio_Mazzone_eugi1492_xmv6yu.jpg'
    ),
    'Eugenio Mazzone',
    '',
    '',
    'Essays'
  )
);

export const Category_Photographs = new Category(
  'Photo Essays',
  makeid(20),
  'Photo Essays',
  new Thumbnail(
    makeid(20),
    new Image(
      'Photographs_Folder_Ardi_Evans_ardievans_qb1ug4',
      'jpg',
      [],
      'https://res.cloudinary.com/dcom6pwyq/image/upload/v1567701996/tljnesandbox/Categories/Photographs_Folder_Ardi_Evans_ardievans_qb1ug4.jpg',
      'http://res.cloudinary.com/dcom6pwyq/image/upload/v1567701996/tljnesandbox/Categories/Photographs_Folder_Ardi_Evans_ardievans_qb1ug4.jpg'
    ),
    'Ardi Evans',
    '',
    '',
    'Photo Essays'
  )
);

export const Category_Poems = new Category(
  'Poems',
  makeid(20),
  'Poems',
  new Thumbnail(
    makeid(20),
    new Image(
      'Poems_Folder_Liana_Mikah_wbkfji',
      'jpg',
      [],
      'https://res.cloudinary.com/dcom6pwyq/image/upload/v1567701996/tljnesandbox/Categories/Poems_Folder_Liana_Mikah_wbkfji.jpg',
      'https://res.cloudinary.com/dcom6pwyq/image/upload/v1567701996/tljnesandbox/Categories/Poems_Folder_Liana_Mikah_wbkfji.jpg'
    ),
    'Ardi Evans',
    '',
    '',
    'Poems'
  )
);

export const All_Categories = [Category_Essays, Category_Photographs, Category_Poems];

export const All_Posts: Post[] = [
  new Post(
    [
      new Author(
        'Andrew Kai Hangsing',
        'andrewkaihaising',
        'default123',
        makeid(20),
        '',
        '',
        [],
        new Thumbnail(
          makeid(20),
          new Image(
            'Insurgent_Emile_Seguin_CA_da0bvh',
            'jpg',
            [],
            'https://res.cloudinary.com/dcom6pwyq/image/upload/v1567779999/tljnesandbox/Posts/Insurgent_Emile_Seguin_CA_da0bvh.jpg',
            'http://res.cloudinary.com/dcom6pwyq/image/upload/v1567779999/tljnesandbox/Posts/Insurgent_Emile_Seguin_CA_da0bvh.jpg'
          ),
          '',
          `<p><span >Andrew Kai Hangsing is the young author of a collection of poetry &lsquo;Sensational Hometown&rsquo; which is an attempt at depicting in verses the small-town life in Northeast India. His works have been published in numerous online magazines such as Delhi Poetry Slam, Wordweavers, and Strata and featured in an article in the&nbsp;</span> <a href="http://eclecticnortheast.in/2018/06/young-haflong-poet-hopes-his-poems-will-help-readers-in-distant-places-know-more-about-his-land/"><span >Eclectic magazine</span></a><span >. His writing can be read on his Facebook page,&nbsp;</span><a href="http://www.facebook.com/AndrewHangsingSaysSo"><span >Andrew Hangsing Says So</span></a> <span >&nbsp;and his&nbsp;</span><a href="andrewhangsingsayssoblog.wordpress.com"><span >blog</span></a><span >. His poetry collection is available on Amazon, Flipkart, and Pothi.com.</span></p>`
        )
      )
    ],
    [],
    false,
    new Thumbnail(
      makeid(20),
      new Image(
        'Insurgent_JR_Korpa_ddyi1g',
        'jpg',
        [],
        'https://res.cloudinary.com/dcom6pwyq/image/upload/v1567779999/tljnesandbox/Posts/Insurgent_JR_Korpa_ddyi1g.jpg',
        'http://res.cloudinary.com/dcom6pwyq/image/upload/v1567779999/tljnesandbox/Posts/Insurgent_JR_Korpa_ddyi1g.jpg'
      ),
      `Photo credit: JR Korpa`,
      'Andrew Kai Hangsing',
      '',
      'The Insurgent'
    ),
    [
      new PostDetail(
        makeid(20),
        new Image(
          'tljnesandbox/Posts/Insurgent_Emile_Seguin_CA_da0bvh',
          'jpg',
          [],
          'https://res.cloudinary.com/dcom6pwyq/image/upload/v1567779999/tljnesandbox/Posts/Insurgent_Emile_Seguin_CA_da0bvh.jpg',
          'http://res.cloudinary.com/dcom6pwyq/image/upload/v1567779999/tljnesandbox/Posts/Insurgent_Emile_Seguin_CA_da0bvh.jpg'
        ),
        'Photo Credits: Emile Seguin',
        `<p><strong>The Insurgent</strong></p><p>&nbsp;</p><p>Seventeen summers was all he had seen</p><p>And he had been home for the vacation</p><p>For, in studies, was his heart more keen</p><p>And less so, in the &lsquo;prevailing situation&rsquo;.</p><p>A good young soul, blessed by all;</p><p>He was as good with his feet on ball.</p><p>&nbsp;</p><p>A gun placed upon his frightened temple,</p><p>Into the jungle, they marched him.</p><p>A quiet &lsquo;Mangpha&rsquo; was all we could mumble</p><p>To him and his future growing gradually dim.</p><p>His timing of homecoming was unfortunate;</p><p>Or was it his destiny, his fate?</p><p>&nbsp;</p><p>The chief and us villagers did all we could</p><p>But in vain; he was nowhere to be found.</p><p>Him, we knew, they would never shoot;</p><p>For they needed to increase their man-count.</p><p>Yet, the loud wails of his helpless mother;</p><p>Our talk and our sleep, much did it bother.</p><p>&nbsp;</p><p>A gun placed upon his young hands,</p><p>Into their midst, they inducted him</p><p>Till his heart turned around the bend</p><p>And he killed and maimed at his own whim.</p><p>&ldquo;What choice do I have?&rdquo; oft he asked himself</p><p>But, into the answer, he dared not delve.</p><p>&nbsp;</p><p>His &lsquo;comrades&rsquo; called him by an alias,</p><p>A name to which his mother was a stranger</p><p>And his home, the village now eyed him with bias</p><p>As an epitome of mischief and danger</p><p>While the papers and the armymen</p><p>Simply dubbed him &lsquo;the insurgent&rsquo;.</p><p>&nbsp;</p><p>&lsquo;Twas thus one day in summer, his last,</p><p>That a well aimed bullet of a patrolman</p><p>Broke through his ribs and his heart did burst</p><p>And he staggered and fell facedown into the sand.</p><p>That summer was the twentieth he had spent</p><p>And the world rejoiced at the end of an insurgent.</p><p>&nbsp;</p><p><span style='font-size: 0.8em;'>*<em>Mangpha</em> = goodbye</p>`,
        '',
        ''
      )
    ],
    true,
    Category_Poems,
    Issues,
    'The Insurgent',
    makeid(20),
    null
  )
];
