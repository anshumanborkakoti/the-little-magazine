import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { WindowRef } from './reusable/window.service';


// <!-- Primary Meta Tags -->
// <title>Meta Tags — Preview, Edit and Generate</title>
// <meta name="title" content="Meta Tags — Preview, Edit and Generate">
// <meta name="description" content="With Meta Tags you can edit and experiment with your content then
//preview how your webpage will look on Google, Facebook, Twitter and more!">

// <!-- Open Graph / Facebook -->
// <meta property="og:type" content="website">
// <meta property="og:url" content="https://metatags.io/">
// <meta property="og:title" content="Meta Tags — Preview, Edit and Generate">
// <meta property="og:description" content="With Meta Tags you can edit and experiment with your
//content then preview how your webpage will look on Google, Facebook, Twitter and more!">
// <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e51
//9cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">

// <!-- Twitter -->
// <meta property="twitter:card" content="summary_large_image">
// <meta property="twitter:url" content="https://metatags.io/">
// <meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate">
// <meta property="twitter:description" content="With Meta Tags you can edit and experiment
//with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">
// <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc09
//36fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">

export interface MetaInformation {
  title?: string;
  description?: string;
  image?: string;
  summaryImage?: string;
}
@Injectable({
  providedIn: 'root'
})
export class MetaTagService {

  constructor(
    private meta: Meta,
    private windowSer: WindowRef
  ) { }

  private readonly DEFAULT_IMAGE =
    'https://res.cloudinary.com/the-little-journal-com/image/upload/c_thumb,w_200,g_face/v1563200107/tljne/Typewriter_main_page.jpg';

  addTags(info: MetaInformation) {
    const tags = [
      {
        name: 'title',
        content: info.title
      },
      {
        name: 'description',
        content: info.description
      },
      {
        name: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        name: 'og:url',
        property: 'og:url',
        content: this.windowSer.nativeWindow.location.href
      },
      {
        name: 'og:title',
        property: 'og:title',
        content: info.title
      },
      {
        name: 'og:description',
        property: 'og:description',
        content: info.description
      },
      {
        name: 'og:image',
        property: 'og:image',
        content: info.image || this.DEFAULT_IMAGE
      },
      {
        name: 'twitter:card',
        property: 'twitter:card',
        content: info.summaryImage || this.DEFAULT_IMAGE
      },
      {
        name: 'twitter:url',
        property: 'twitter:url',
        content: this.windowSer.nativeWindow.location.href
      },
      {
        name: 'twitter:title',
        property: 'twitter:title',
        content: info.title
      },
      {
        name: 'twitter:description',
        property: 'twitter:description',
        content: info.description
      },
      {
        name: 'twitter:image',
        property: 'twitter:image',
        content: info.image || this.DEFAULT_IMAGE
      }
    ];
    for (const tag of tags) {
      if (tag.content && tag.content.trim()) {
        // this.meta.removeTag(`name='${tag.name}'`);
        this.meta.updateTag(tag, `name='${tag.name}'`);
      }
    }
  }

}
