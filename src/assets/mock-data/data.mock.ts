import { Category } from 'src/app/models/category.model';
import { Thumbnail } from 'src/app/models/thumbnail.model';
import { Image } from 'src/app/models/image.model';
import { Post } from 'src/app/models/post.model';
import { Author } from 'src/app/models/author.model';
import { PostDetail } from 'src/app/models/post-detail.model';
import { Issue } from 'src/app/models/issue.model';
import { environment } from 'src/environments/environment';

const DELIVERY_PREFIX = environment.cloudinary_deliveryUrl_prefix;

export const Issues = [
  new Issue(
    'September 2019',
    'WO6d5m7D7zRJhtMAKlbO5qeZylFTFIK83pbt0ANEYG3YQktqqU',
    'September 2019',
    new Thumbnail(
      'zd6nfkXE6773VIvVVTQ7iX0xpRktsxsVH8yuuxieYbICoPhPdn',
      new Image(
        `${DELIVERY_PREFIX}/Issues/September_2019`,
        'jpg'
      ),
      'Juan Sinni',
      '',
      '',
      'September 2019'
    ),
    true,
    false,
    '../../../assets/test.pdf',
    true
  )
];

export const Category_Essays = new Category(
  'Essays',
  'GR4L98FSWER7k1atlkkWbd2E6lAG00zpcFGpV6BLyXT0V1Eq5U',
  'Essays',
  new Thumbnail(
    '48HaYaoxa6rijjnjT3jCObJFW9c72ZF3LtYvLppLppdxcxPNt3',
    new Image(
      `${DELIVERY_PREFIX}/Categories/Essays_Folder_Eugenio_Mazzone_eugi1492_xmv6yu`,
      'jpg',
      []
    ),
    'Eugenio Mazzone',
    '',
    '',
    'Essays'
  )
);

export const Category_Photographs = new Category(
  'Photo Essays',
  'uixKbVkSJVzS0i8AnXDxtLOMoIajFDnEkh7Zf9Rj0LMPyzLzI9',
  'Photo Essays',
  new Thumbnail(
    'Y5L8BeKCRwdWORR9FlxKMUws8PfTeFWbAIEwOj15K2WNWqwGmG',
    new Image(
      `${DELIVERY_PREFIX}/Categories/Photographs_Folder_Vanveen_JF_vanveenjf_dwcze7`,
      'jpg',
      []
    ),
    'Vanveen JF',
    '',
    '',
    'Photo Essays'
  )
);

export const Category_Poems = new Category(
  'Poems',
  'QMDAEr8ABSjorX6wXJMenWnWe21jcdr8m9jAO77zWAu14lsYXt',
  'Poems',
  new Thumbnail(
    'jLu7HvDsX4YTwJCgm9attuYYB3licVKatE5CYC670es5EIYLCf',
    new Image(
      `${DELIVERY_PREFIX}/Categories/Poems_Folder_Liana_Mikah_wbkfji`,
      'jpg',
      []
    ),
    'Ardi Evans',
    '',
    '',
    'Poems'
  )
);

export const All_Categories = [Category_Essays, Category_Photographs, Category_Poems];

export const Post_insurgent = new Post(
  [
    new Author(
      'Andrew Kai Hangsing',
      'andrewkaihaising',
      'default123',
      'oxtbLwW5ObrOfl5T9Kh67bNi88vTJiZQXy6oN4DHhbt6dArcmY',
      '',
      '',
      [],
      new Thumbnail(
        'FIohGashhAI93ev0JcO6knCwbLBkP51zyP86i3VF8kDgBgVF31',
        new Image(
          `${DELIVERY_PREFIX}/Authors/Andrew_Kai_Hangsing`,
          'jpg',
          []
        ),
        '',
        `<p><span >Andrew Kai Hangsing is the young author of a collection of poetry &lsquo;Sensational Hometown&rsquo; which is an attempt at depicting in verses the small-town life in Northeast India. His works have been published in numerous online magazines such as Delhi Poetry Slam, Wordweavers, and Strata and featured in an article in the&nbsp;</span> <a href="http://eclecticnortheast.in/2018/06/young-haflong-poet-hopes-his-poems-will-help-readers-in-distant-places-know-more-about-his-land/"><span >Eclectic magazine</span></a><span >. His writing can be read on his Facebook page,&nbsp;</span><a href="http://www.facebook.com/AndrewHangsingSaysSo"><span >Andrew Hangsing Says So</span></a> <span >&nbsp;and his&nbsp;</span><a href="andrewhangsingsayssoblog.wordpress.com"><span >blog</span></a><span >. His poetry collection is available on Amazon, Flipkart, and Pothi.com.</span></p>`
      )
    )
  ],
  [],
  false,
  new Thumbnail(
    'HVCU2GEeN1FMWeD0ddWmfWRZzAo4tqFsBCtBCWu1YVW08lWHPC',
    new Image(
      `${DELIVERY_PREFIX}/Posts/Insurgent_JR_Korpa_ddyi1g`,
      'jpg',
      []
    ),
    `JR Korpa`,
    'Andrew Kai Hangsing',
    '',
    'The Insurgent'
  ),
  [
    new PostDetail(
      'Iw8t6olmWQR3jAyOQ809Ehy72BbmuzdjKbVgwVsAFPIK0Xn85M',
      new Image(
        `${DELIVERY_PREFIX}/Posts/Insurgent_Emile_Seguin_CA_da0bvh`,
        'jpg',
        []
      ),
      'Emile Seguin',
      `<p>&nbsp;</p><p>Seventeen summers was all he had seen</p><p>And he had been home for the vacation</p><p>For, in studies, was his heart more keen</p><p>And less so, in the &lsquo;prevailing situation&rsquo;.</p><p>A good young soul, blessed by all;</p><p>He was as good with his feet on ball.</p><p>&nbsp;</p><p>A gun placed upon his frightened temple,</p><p>Into the jungle, they marched him.</p><p>A quiet &lsquo;Mangpha&rsquo; was all we could mumble</p><p>To him and his future growing gradually dim.</p><p>His timing of homecoming was unfortunate;</p><p>Or was it his destiny, his fate?</p><p>&nbsp;</p><p>The chief and us villagers did all we could</p><p>But in vain; he was nowhere to be found.</p><p>Him, we knew, they would never shoot;</p><p>For they needed to increase their man-count.</p><p>Yet, the loud wails of his helpless mother;</p><p>Our talk and our sleep, much did it bother.</p><p>&nbsp;</p><p>A gun placed upon his young hands,</p><p>Into their midst, they inducted him</p><p>Till his heart turned around the bend</p><p>And he killed and maimed at his own whim.</p><p>&ldquo;What choice do I have?&rdquo; oft he asked himself</p><p>But, into the answer, he dared not delve.</p><p>&nbsp;</p><p>His &lsquo;comrades&rsquo; called him by an alias,</p><p>A name to which his mother was a stranger</p><p>And his home, the village now eyed him with bias</p><p>As an epitome of mischief and danger</p><p>While the papers and the armymen</p><p>Simply dubbed him &lsquo;the insurgent&rsquo;.</p><p>&nbsp;</p><p>&lsquo;Twas thus one day in summer, his last,</p><p>That a well aimed bullet of a patrolman</p><p>Broke through his ribs and his heart did burst</p><p>And he staggered and fell facedown into the sand.</p><p>That summer was the twentieth he had spent</p><p>And the world rejoiced at the end of an insurgent.</p><p>&nbsp;</p><p><span style='font-size: 0.8em;'>*<em>Mangpha</em> - goodbye</p>`,
      '',
      'The Insurgent'
    )
  ],
  true,
  Category_Poems,
  Issues,
  'The Insurgent',
  'YgPNeyQC9zcK6w9Ffw1RGbyql6RV3VF0eZzkSkgSqBocPL8F3x',
  null
);

export const Post_Bruce = new Post(
  [
    new Author(
      'Bruce McRae',
      '',
      '',
      '6HFX4OpY0uKkCRA3UMJfe92DFx38Z9c1NUBphXA1QPtK9ME5r3',
      '',
      '',
      [],
      new Thumbnail(
        'Iw8t6olmWQR3jAyOQ809Ehy72BbmuzdjKbVgwVsAFPIK0Xn85M',
        new Image(
          `${DELIVERY_PREFIX}/Authors/Bruce_McRae`,
          'jpg'
        ),
        '',
        `<p><strong>Bruce McRae</strong>, a Canadian musician currently residing on Salt Spring Island BC, is a multiple Pushcart nominee with over 1,400 poems published internationally in magazines such as Poetry, Rattle, and the North American Review. His books are &lsquo;The So-Called Sonnets&rsquo; (Silenced Press); &lsquo;An Unbecoming Fit Of Frenzy&rsquo; (Cawing Crow Press); and &lsquo;Like As If&rsquo; (Pski&rsquo;s Porch); and &lsquo;Hearsay&rsquo; (The Poet&rsquo;s Haven).</p>`
      )
    )
  ],
  [],
  false,
  new Thumbnail(
    'YgPNeyQC9zcK6w9Ffw1RGbyql6RV3VF0eZzkSkgSqBocPL8F3x',
    new Image(
      `${DELIVERY_PREFIX}/Posts/A_One_Two_Three_Travis_Yewell_r50vdh`,
      'jpg'
    ),
    'Travis Yewell',
    'Bruce McRae',
    '',
    'Two Poems'
  ),
  [
    new PostDetail(
      '6HFX4OpY0uKkCRA3UMJfe92DFx38Z9c1NUBphXA1QPtK9ME5r3',
      new Image(
        `${DELIVERY_PREFIX}/Posts/The_Day_I_Almost_Won_The_Lottery_Carl_Raw_2_dkjrgk`,
        'jpg'
      ),
      'Carl Raw',
      `<p>&nbsp;</p><p>The day I almost won the lottery,</p><p>short a bob or two and shy one number.</p><p>&nbsp;</p><p>The day the sky came nearer to the Earth</p><p>than you want to think is possible,</p><p>my destiny tangled in an old fishing line,</p><p>sea mist clinging close to shore,</p><p>gulls mocking me in my desperation.</p><p>&nbsp;</p><p>The day I almost walked away from myself.</p><p>Leaving my skin behind. Abandoning my old shoes.</p><p>A single empty hanger in the closet swinging perpetually,</p><p>as if wind ran through the house</p><p>and a great truth had been denied me.</p>`,
      '',
      'The Day I Almost Won The Lottery'
    ),
    new PostDetail(
      'w14yLnhV92SKj2Pz629mI8m2llOZG3MXUBKxitLyxdWLjPMKab',
      new Image(
        `${DELIVERY_PREFIX}/Posts/A_One_Two_Three_Travis_Yewell_r50vdh`,
        'jpg'
      ),
      'Travis Yewell',
      `<p>&nbsp;</p><p>In the haunted ballroom of the mind&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p><p>truth is tripping over pretext.</p><p>The left foot has overtaken the right.</p><p>The lost ones stumble. Promise blushes.</p><p>&nbsp;</p><p>But the band plays on. And on.</p><p>While citizens storm the capitol.</p><p>As rats dance in the veils of plague</p><p>and a livid God returns,</p><p>his cold hand touching the furthest reaches.</p><p>&nbsp;</p><p>Just then, when the music stops&nbsp;</p><p>the mystery deepens.</p>`,
      '',
      'A One Two Three'
    )
  ],
  true,
  Category_Poems,
  Issues,
  'Two Poems',
  '6BoE01wfQbcW5JUFLqet7Xa4iKfhFgu5PSDrEjlHyJHTubCsCw',
  null
);

export const Post_Julie_Kagti = new Post(
  [
    new Author(
      'Jule Kagti',
      '',
      '',
      'eh6SsYiYavHnqYXiccaQgUChaIqeEonTNOJkbkTUbpg2f7R0YK',
      '',
      '',
      [],
      new Thumbnail(
        '603FJBpCGnKxlcsMFKPViSaaS2wTU7XSZA1mCMSQw04tvAufAG',
        new Image(
          `${DELIVERY_PREFIX}/Authors/Julie_Kagti`,
          'jpg'
        ),
        'Julie Kagti',
        `<p>Julie shuttles between the various corners in Northeast of India and Bangalore where her family is based. She grew up in Upper Assam where she developed an interest in weaving and went on to pursue a three-year diploma course on the subject from Sophia Polytechnic, Bombay. Julie has spent over two decades in the handcrafted textile industry and her way of dealing with midlife was to start introducing travelers to the region of her birth through her curated tours,&nbsp;<a href="https://curtaincalladventures.com/blog/">Curtain Call Adventures</a>. She occasionally likes to recount her interactions with people she encounters along the way.</p>`
      )
    )
  ],
  [],
  false,
  new Thumbnail(
    'RcvntZoEY6bZf6xMGrxXedoYPaK43jIMCltFTkO9v6SZSfUK9H',
    new Image(
      `${DELIVERY_PREFIX}/Posts/Dear_Ziro_Louis_Harang_x69nmp`,
      'jpg'
    ),
    'Louis Harang',
    'Jule Kagti',
    '',
    'Dear Ziro'
  ),
  [
    new PostDetail(
      'Bzb9XtF5Ke4njWEqtwxjFEjh5wfqZuGrvwBwn1TneHueyC6KG2',
      new Image(
        `${DELIVERY_PREFIX}/Posts/Dear_Ziro_Luca_Severin_s9mmro`,
        'jpg'
      ),
      'Luca Severin',
      `<p>&nbsp;</p><p>On a December afternoon in 1985, my parents and I were wading through the roads of Khasi hills. My boarding school had closed for winter, and I was heading home for a three-month-long vacation. From the front seat of his Willys Jeep, my father spoke into the rearview mirror, &ldquo;Julie, did I tell you that we recently we drove up to Ziro?<sup>1</sup> What a spectacular drive it was!&rdquo; My mother said wistfully, &ldquo;You&rsquo;d have loved the villages&mdash;homes with thatch roofs standing tall on stilts and tattoo-faced women weaving on their front porches.&rdquo;&nbsp;</p><p>&nbsp;</p><p>As a child, my parents&rsquo; vivid descriptions of Ziro grew a pool of curiosity inside me and prodded me to know more about the town burrowed against rivulets and pine-clad hills. However, adult life responsibilities often came in the way, and the envisaged trip stayed quietly alive only in my mind.&nbsp;</p><p>&nbsp;</p><p>The summer of 2014 changed all that. I landed in Ziro with a bag full of warm clothing and no travel itinerary. I was happy to find that the town was very similar to how I&rsquo;d imagined it to be. Endless fields of green, bright skies with a burst of clouds, and clean, crisp air.</p><p>&nbsp;</p><p>I soon discovered that my favorite way of spending time in the town was to ramble through its streets flanked both sides by paddy fields. Ziro, known for its sustainable agricultural system, is deeply rooted in the Apatani tribe&rsquo;s rich knowledge of natural resource conservation.&nbsp;</p><p>&nbsp;</p><p>One quiet afternoon, during one of my walks, I was surrounded by paddy fields with distant hills lining the town, and that&rsquo;s where I first met Yabi.&nbsp;</p><p>&nbsp;</p><p>Deep within the fields of new paddy, a cluster of Apatani<em><sup>2</sup></em> women hunched over their reflections, ankle-deep in muddy water, dexterously planting. On finding me glancing their way, one of the Apatani women waved her hand gesturing me to join them for a tea break. Thrusting apprehension aside, minutes later, I found myself amidst the warmth of teacups, exchanging stories about our distinctly disparate lives.&nbsp;</p><p>&nbsp;</p><p>It was easy to spot Yabi in the circle of women: chuckles and laughter hung in the air when she was around. She was also the only one in the group who spoke Assamese, and eased me into the group. I remember her asking teasingly, &ldquo;So, what&rsquo;s the food like in this fancy new hotel you are staying in?&rdquo;&nbsp;</p><p>&nbsp;</p><p>Our association that afternoon was brief, but it sparked a unique affinity between us and through odd calls and messages, Yabi and I checked in on each other. Seasons later, I was planning another trip to Ziro. I called Yabi on the phone to let her know. After our initial greetings, I inquired in jest, &ldquo;How is your house coming along? Will it have a floor for me to stand on when I visit you?&rdquo;</p><p>&nbsp;</p><p>For many years, Yabi had been working at a government office&mdash;first as a cleaner and then as a peon&mdash;diligently saving money to build a house of her own. Being widowed at a young age, she had to single-handedly support her family.&nbsp;</p><p>&nbsp;</p><p>Laughter filled my ear: &ldquo;It&rsquo;s almost complete. I&rsquo;ve always wanted to live in a nice concrete house that didn&rsquo;t need a repair every year. It&rsquo;s for my old age.&rdquo;&nbsp;</p><p>&nbsp;</p><p>Weeks later, I was on a treacherous road heading back to Ziro. In the distance, paddy fields and berry blossom canopies started emerging slowly. To my surprise, the town I&rsquo;d grown to love had changed considerably. Many houses that were once thatch-roofed had become metal-roofed, and their matted bamboo walls had been replaced by concrete. Over the years, hordes of people from nearby villages had migrated to Ziro for work and educational opportunities. Swelling with people, buildings, and commercial activity, Ziro had developed haphazardly into a town, parts of which resembled an upturned Lego set.&nbsp;</p><p>&nbsp;</p><p>Yabi lived on a hillside dotted with tiny houses lodged close together. A winding path curved its way to the top. Yabi trotted down the pathway, a smile unfolding across her face. &ldquo;I am so happy you could come! Look, this is my old house,&rdquo; she pointed to the hut where she previously lived, and then led me a few steps ahead to show me her new house.&nbsp;</p><p>&nbsp;</p><p>&ldquo;I have been busy painting the interiors, so I could show it to you.&rdquo; We entered a room lined with shelves and other storage units. Instinctively, words toppled out of my mouth, &ldquo;Wow! This room is <em>really</em> pink.&rdquo; The whole room was painted a shade that I associated with strawberry ice-cream. With underlying pride, Yabi said, &ldquo;I painted it myself. It&rsquo;s my favorite color. I wanted a bright color after living in the dark bamboo hut for so many years.&rdquo;&nbsp;</p><p>&nbsp;</p><p>She led me to see the other rooms and ended the house tour with the kitchen&mdash;a traditional <em>Apatani</em> one built with bamboo. A few feet above the fire, from the ceiling, hung the racks where firewood, dry meat, and rice were stored. While we were crouching around the central fireplace, I asked her curiously, &ldquo;Is it common here for people to retain their traditional kitchen and build a modern one too?&rdquo;</p><p>&nbsp;</p><p>&ldquo;Yes, we prefer grilling meat in the bamboo sleeves of the open fireplace. It keeps the room warm and the damp out during monsoons. It&rsquo;s also good for drying meat. Besides, we love sitting around the fire and entertaining our guests. The new kitchen will have an electric rice cooker and a cooking range. You see,<em>&nbsp;Apatanis</em> are very fond of rice, so with an electric rice cooker, I&rsquo;ll never have to worry about not having warm rice ready for my children when they return home in the evening after school.&rdquo;</p><p>&nbsp;</p><p>I mentioned to Yabi that I noticed stark changes in Ziro since the last time I had been there and asked her if it experienced high outward migration. She nodded queitly in agreement.&nbsp;</p><p>&nbsp;</p><p>&ldquo;Most <em>Apatani</em> families tend to have three or four children. Agriculture, animal rearing, and foraging from the forest aren&rsquo;t enough to support a large family. So you&rsquo;ll find many people moving out of Ziro for work. Another financial liability are the yearly offerings people make with the blessings of a shaman<em><sup>3</sup></em> to cure someone in the family or be blessed with a child or good fortune. These ceremonies are expensive. Even though the church or temple don&rsquo;t make these demands, many of us still follow the old customs while simultaneously trying to adapt to the changing world. It&rsquo;s like we are wedged between two worlds.<em>&rdquo;&nbsp;</em></p><p>&nbsp;</p><p>Yabi and I continued to chat until dusk hovered over the windowpanes. We realized it was time for me to head back; and reassuringly, we exchanged hopeful goodbyes.&nbsp;</p><p>&nbsp;</p><p>On my hike back to the hotel, I passed through large patches of abandoned paddy fields. Through the pine trees, lights gleamed in Ziro. A town that&rsquo;s one of a kind and so far removed from the city, and yet rapidly changing to adapt to the world. I thought of a day not far away when there would be no bamboo huts on stilts, no <em>Apatani</em> women with tattooed faces, and no weavers fervidly weaving on their porches. I felt a knot tighten in my throat as my feet picked up the pace. Leaving Ziro behind, I walked into a fast-approaching night with images of the town flickering relentlessly in my mind.</p><p>&nbsp;</p><ol> <li><em>Ziro is located in Arunachal Pradesh&rsquo;s lower Subansiri district. Initially a wasteland of swamps, Ziro&rsquo;s sustainable agriculture and natural conservation practices are a testimony to how humans and nature can exist together in a state of interdependence.&nbsp;</em></li> <li><em>The Apatani tribe, a distinctive tribal group of people, is believed to have inhabited Ziro since the 15th century and trace their ancestors to Central Tibet.&nbsp;</em></li> <li><em>Shaman is a priest and a very important member of the Apatani village.</em></li></ol>`,
      '',
      'Dear Ziro'
    )
  ],
  true,
  Category_Essays,
  Issues,
  'Dear Ziro',
  'JD3f2pylJxsWqFEiSsACMdlOsrjEDaOPyT49EcvZWgGdb1uIZj',
  null
);

export const Post_Paloma = new Post(
  [
    new Author(
      'Paloma Dutta',
      '',
      '',
      'AWFPoXD7y2HCqBqtlvy1OQT4fYNda8JmWNdq15DKugV5qaGRKd',
      '',
      '',
      [],
      new Thumbnail(
        'f4x6XMXaKfXKfU51Qaa32Yp3cS31Yi9FC8rHgo01ubDAuZHnsj',
        new Image(
          `${DELIVERY_PREFIX}/Authors/Paloma_Dutta`,
          'jpg'
        ),
        'Paloma Dutta',
        `<p>Paloma Dutta &nbsp;works as an editor in Penguin Random House India for her bread, butter and bus ticket (more often than not to the mountains). Travel makes her believe in serendipity, essential kindness of the human heart, and the power of Bollywood to build instant friendships anywhere in the world. She often writes journey pieces for National Geographic Traveler India.</p>`
      )
    )
  ],
  [],
  false,
  new Thumbnail(
    'N4QTC0zwdXeosoNKA5YFW0VJELYcFe0wNoB2nDpeumiN2utc7W',
    new Image(
      `${DELIVERY_PREFIX}/Posts/Monsooned_in_Gangtok_Frantisek_Duris_e4wlg8`,
      'jpg'
    ),
    'Frantisek Duris',
    'Paloma Dutta',
    '',
    'Monsooned in Gangtok'
  ),
  [
    new PostDetail(
      'JGVMUN6ncub2pa0Bbsg5VLarIHCIO6CAavGyvbg2PqeCX2CAOO',
      new Image(
        `${DELIVERY_PREFIX}/Posts/Monsooned_in_Gangtok_Alvaro_SF_jx0x32`,
        'jpg'
      ),
      'Alvaro SF',
      `<p>&nbsp;</p><p>Over the last decade, traveling to little-visited places had become like second nature to me. So when my parents suggested Sikkim for our next family holiday, I insisted that we use Gangtok only as a gateway to the remoter parts of the state. I had imagined that it would be like most other capital cities&mdash;high on infrastructure but not a true window to the cultural milieu and scenic beauty of the state.&nbsp;</p><p>&nbsp;</p><p>Knowing how passionate I am about traveling, my parents left the itinerary to me. And I planned the whole trip end-to-end, roping in a colleague from Kalimpong, acquaintances who had been to Sikkim, and my trump card&mdash;my Sikkimese friend from college whom I had recently found on the magic carpet of our times, Facebook. With their help, I packed our four-nights-five-days itinerary to the full, barely leaving any time to sit and relax, or stand and stare!&nbsp;</p><p>&nbsp;</p><p>We would spend one night in Gangtok to get our bearings before heading north to Lachung, the mountain village adjacent to Tibet. My heart was set on west Sikkim as well, especially the red-roofed forest rest house in Bakhim, under the shadow of the mighty Kanchenjunga. It was then that I heard stray comments about June not being the best time to visit Sikkim because of the monsoons. Considering the situation, I reasoned in my head that an offbeat destination would be off the radar of most tourists. So we did not change our destinations, and I started scouting for hotels and making the bookings.&nbsp;</p><p>&nbsp;</p><p>The first sprig of real doubt sprouted when some days before our departure, the manager of the hotel in which we were staying in Lachung messaged me saying that the road to Lachung was not safe because of the rains. He was also kind enough to offer to return the money we had paid as an advance if we could not make it. I fervently hoped it would not come to that, but as it turned out, due to the heavy rains in the June of 2011, we could not go to any other place in Sikkim. We were monsooned in Gangtok for four nights!</p><p>&nbsp;</p><p>But we had little to complain about. The historic, cultural, and scenic attractions in and around the city left us captivated. Among them was the sprawling Rumtek monastery with its awe-inspiring Golden Stupa, the Tashi View Point for panoramic views it offered of the surrounding mountains, and the Himalayan Zoological Park where we spotted the adorable red pandas. We spent the evenings in the very charming &nbsp;M.G. Road where we shopped or whiled away time. In the pedestrian-only road, we sat at first floor cafes listening to jazz and sipping coffee to fight the cold that crept up with the rains, looking out at locals going about their business or rendezvous plans. Apart from these wonderful hours, I took away three distinctly personal memories from Sikkim that will always be stamped to my mind.</p><p>&nbsp;</p><p>Our hotel was on Bhanu Path, on the ridge road, which gave the traveler an away-from-everything feeling while being right in the thick of things. Even though it was barely five minutes away from the bustling M.G. Road, it exuded an aura of a tropical forest. The groves of bamboo drooping over the avenue added to the sense of seclusion. We were so transported from the city sounds and lights that right after dusk, crickets would break out in a melodious chirp that would leave us enthralled. That a tiny insect could create such an incredible sound by just rubbing its hind legs is one of the many wonders of nature. That music&mdash;a sonorous sound which relaxes when you are tired and lulls you to sleep at night&mdash;was interrupted only by the thud-thud-thud of a heavy shower on the vegetation around. The medley is one of the most beautiful sounds I have ever heard.</p><p>&nbsp;</p><p>In the mornings, the window of our room opened up to a burst of pink bougainvillea flowers, stark amidst the rain-washed green, but standing out more so because of a field full of white prayer flags in the near distance. Prayer flags have always had a calming influence on me. But to see them amidst the lush green verdure, and often against the stupendous mountains, completely fascinated me. They were everywhere. Standing proud in the rain, in complete harmony with the surrounding &ndash; carrying in the wind the prayers of peace for the humankind.</p><p>&nbsp;</p><p>Our four days in Gangtok soon came to an end. And as with most return journeys, the memories of the trip and the thought of returning to the mundaneness had started weighing me down. As we headed back, a steady drizzle reflected my state of mind. We&rsquo;d heard that incidents of landslides weren&rsquo;t uncommon in the area and the long, winding road ahead appeared dangerous through the rain. But just at that moment, as if to distract us from unpleasant thoughts, nature opened up a beautiful panorama in front of us. A thick blanket of mist hove ed over Teesta River for the most part of the remaining journey. At one turn, I saw a solitary boat amidst the mist, and I was certain I was dreaming&mdash;such a surreal landscape could not be real. &nbsp;</p><p>&nbsp;</p><p>For me, Gangtok was a heady mixture of the modern and the ancient: an aesthetic intermingling of greenery and concrete; and the stately mountainous backdrop offered an insightful perspective of the minuteness &nbsp;of human creations compared to the majesty of nature. The trip provided a spectacular curtain-raiser to the beauty of Sikkim. I will make another trip to Sikkim someday to explore the roads less traveled. But for now, Gangtok had worked its monsoon magic on me.</p>`,
      '',
      'Monsooned in Gangtok'
    )
  ],
  true,
  Category_Essays,
  Issues,
  'Monsooned in Gangtok',
  'Idw5cmmZuMokBMvdwmIa9N6JMkP18Ua54KL7lnPY9oeaUY6A82',
  null
);

export const Post_Faraway_World: Post = new Post(
  [
    new Author(
      'Asangle Disong',
      '',
      '',
      'lwwo6fN7APinQFPNzMupBEYn0jbQlWrYYPzx7Y2vAeDdJBGgj6',
      '',
      '',
      [],
      new Thumbnail(
        'V475KBT8ivbK5qjXCkPJwyZJVDd1wHQ03aH3yFOfDQyQOlQZgM',
        new Image(
          `${DELIVERY_PREFIX}/Authors/Asangle_Disong`,
          'jpg'
        ),
        'Asangle Disong',
        `<p>Asangle Disong is a freelance writer with a passion for photography. In the past, Asangle&rsquo;s worked in the rural development sector, and now spends most her time traveling, writing, and exploring indigenous cultures and communities. &nbsp;</p>`
      )
    )
  ],
  [],
  false,
  new Thumbnail(
    'uuvUpv3tKF3UVvDyX2x1h1W7xR2mWk9b6PE3UhAXPch1QdiSYI',
    new Image(
      `${DELIVERY_PREFIX}/Posts/PhotoEssays/Asangle_Disong/1`,
      'jpg'
    ),
    'Asangle Disong',
    'Asangle Disong',
    '',
    'A Faraway World'
  ),
  [
    new PostDetail(
      '0aMGGGdlfaNexIPNnWFg9b7MdDPnyS4lWDHj8T4BzgnhXoGZD1',
      new Image(
        `${DELIVERY_PREFIX}/Posts/PhotoEssays/Asangle_Disong/1`,
        'jpg'
      ),
      '',
      `<p>A <em>Morung</em> house, a typical house that in the olden days was used as a dormitory for boys to learn the skills they needed to know as a man such as hunting, craft making, and courting girls. </p>`
    ),
    new PostDetail(
      'LM7zz0nmuRaxbTnCOGeqOLEKT9qVVjtlFgVNwaIdW79Aj79MGL',
      new Image(
        `${DELIVERY_PREFIX}/Posts/PhotoEssays/Asangle_Disong/2`,
        'jpg'
      ),
      '',
      `<p>A gateway to the Ze Mnui village. In the olden days, the Zeme tribe consisted of headhunters and to protect their village from enemies, they built fort-like walls with stones. To the villagers, the fort represents the strength and unity of the village.</p>`
    ),
    new PostDetail(
      'U3LBtyeEbhkeoOTMX7yaEcZWABGGG93ATbPUlZab0XfhMbrKou',
      new Image(
        `${DELIVERY_PREFIX}/Posts/PhotoEssays/Asangle_Disong/3`,
        'jpg'
      ),
      '',
      `<p>Many of the huts in the village are built with thatched roofs and bamboo walls. Though the tribe depends on the forest for their needs, they believe in taking only what they absolutely need and living codependently with nature.</p>`
    ),
    new PostDetail(
      'M7HyHugdFtTwS7dtb2iL3e9phma9dmbJIHYj5vDFZZ3DWwMj4X',
      new Image(
        `${DELIVERY_PREFIX}/Posts/PhotoEssays/Asangle_Disong/4`,
        'png'
      ),
      ``,
      `<p>A bird&rsquo;s eye view of the Ze Mnui village perched on a steep hill.</p>`
    )
  ],
  true,
  Category_Photographs,
  Issues,
  'A Faraway World',
  'k0OsbhN8hovFxg4r73vyWW02cPKBnp5xkRDUf3AwRSC5z35lfm',
  null,
  `<p>The Photo Essay &ldquo;A Faraway World&rdquo; explores the Ze Mnui village in Manipur where the Zeme tribe resides. </p>`,
);

export const Post_Mayurim = new Post(
  [
    new Author(
      'Mayurim Das Bayan',
      '',
      '',
      'A6i7ZMJl9dD3VZqRe0HJpCJGiZdEp7khmuYAqKvd872hYDEpAz',
      '',
      '',
      [],
      new Thumbnail(
        'M7HyHugdFtTwS7dtb2iL3e9phma9dmbJIHYj5vDFZZ3DWwMj4X',
        new Image(
          `${DELIVERY_PREFIX}/Authors/Mayurim_Das_Bayan`,
          'jpg'
        ),
        'Mayurim Das Bayan',
        `<p>Mayurim Das Bayan&rsquo;s photographs have been recognized and showcased at photography events such as the National Photography Exhibition &lsquo;Pohor.&rsquo; With a master&rsquo;s degree in Mass Communication and Journalism, Mayurim has worked as a producer at a production house and as a project officer on a Tiger conservation project at Manas National Park. Apart from photography, she shares a passion for books, cinema, and traveling. </p>`
      )
    )
  ],
  [],
  false,
  new Thumbnail(
    'k0OsbhN8hovFxg4r73vyWW02cPKBnp5xkRDUf3AwRSC5z35lfm',
    new Image(
      `${DELIVERY_PREFIX}/Posts/PhotoEssays/Mayurim_Das_Bayan/1`,
      'jpg'
    ),
    'Mayurim Das Bayan',
    'Mayurim Das Bayan',
    '',
    'Fables of the Earth'
  ),
  [
    new PostDetail(
      'jKidSiKPfMNUa156PHmz0ULBvtRJzwYI4iwAAIP1M4u4lRm8Jf',
      new Image(
        `${DELIVERY_PREFIX}/Posts/PhotoEssays/Mayurim_Das_Bayan/1`,
        'jpg'
      ),
      '',
      `<p>Only women in the Hira community are tasked with shaping the pots. The knowledge and artisanship of shaping pots is considered a guarded secret that&rsquo;s passed down ancestrally from a mother to a daughter or daughter-in-law.</p>`
    ),
    new PostDetail(
      'PFaQCIIYdHXSZL1J1SSW2ORTDwajm9wqgt0Jlofp0Ikyk72PYw',
      new Image(
        `${DELIVERY_PREFIX}/Posts/PhotoEssays/Mayurim_Das_Bayan/2`,
        'jpg'
      ),
      '',
      `<p>The pottery produced by the community is entirely handmade and as many as 150 earthen lamps can be made in a day.</p>`
    ),
    new PostDetail(
      'SI9EfXGjnsGm7QLMtWu6W1woBbwrUP4hzRoYNJqiApD5PmeTjf',
      new Image(
        `${DELIVERY_PREFIX}/Posts/PhotoEssays/Mayurim_Das_Bayan/3`,
        'jpg'
      ),
      '',
      `<p>The Hira community practices division of labor on the basis of gender, age, and skills of the potters. The women shape the pots, while the men perform tasks such as collecting the rare molding mud, the sticky <em>Hiramati,</em> baking the products after getting them sundried, and transporting products to the market.</p>`
    ),
    new PostDetail(
      'd4JLxpQ6BQyqfLXauvfFeLCCs8d2S5ousilGJgoOzOakpiNgIG',
      new Image(
        `${DELIVERY_PREFIX}/Posts/PhotoEssays/Mayurim_Das_Bayan/4`,
        'jpg'
      ),
      '',
      `<p>Pottery products undergo seven long phases out of which the last phase involves creating a furnace with indigenous materials such as hay and aquatic algae to burn the earthen products and prepare them for the market.</p>`
    )
  ],
  true,
  Category_Photographs,
  Issues,
  'Fables of the Earth',
  'g934ZwmnFYYIETEMLpeUu8S74ryZc3SD3LWMqbYPVNYWKQx6h4',
  null,
  `<p>The photo essay &ldquo;Fables of the Earth&rdquo; showcases the Hira potters&rsquo; community in Assam&rsquo;s Barpeta district. For the Hira community, pottery is not just an occupation, but a sense of identity and collective artistry passed down since (what&rsquo;s believed to be) 600 BC.</p>`
)

export const All_Posts: Post[] = [
  Post_Bruce,
  Post_Julie_Kagti,
  Post_Paloma,
  Post_Faraway_World,
  Post_Mayurim,
  Post_insurgent
];
