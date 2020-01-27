import { Component, OnInit } from '@angular/core';
import { MetaTagService } from 'src/app/meta-tag.service';

@Component({
  template: `<div class='aboutus'>
        <div class="h6 first">
          About Us
        </div>
       <p><em>The</em> <em>
  Little Journal</em> of Northeast India strives to&nbsp;explore and celebrate
   the underrepresented, yet rich and diverse stories of northeast India. We are interested in the
   untold, unexplored and yet, everyday stories of people, places, and things based on or inspired
   from northeast India.&nbsp;</p><p>The Little Journal seeks to spotlight poets, writers,
   photographers,<strong>&nbsp;</strong>and artists of all kinds who have a unique story to tell.
   The submission piece may be grim, whimsical, funny, or thought-provoking. Very simply, we are looking
   for pieces that stick with people long after they have first read or witnessed them.&nbsp;</p>
   <p><em>The Little Journal</em> is based on the saying &ldquo;Good things come in small packages.
   &rdquo; The journal is one of the smallest online publishers of Northeast India and is aimed at
    presenting high quality pieces that are linguistically and aesthetically beautiful, ambitious,
    <strong>&nbsp;</strong>and inspiring. To know more about submitting your work for our first issue,
    visit our&nbsp;<a href="/guidelines">Guidelines</a> page.</p>
  </div>`,
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  constructor(
    private metaTagService: MetaTagService
  ) { }

  ngOnInit() {
    this.addMetaInfo();
  }

  private addMetaInfo() {
    const description = `The Little Journal of Northeast India strives to explore and
    celebrate the underrepresented, yet rich and diverse stories of northeast India.
    We are interested in the untold, unexplored and yet, everyday stories of people,
     places, and things based on or inspired from northeast India.
The Little Journal seeks to spotlight poets, writers, photographers,
 and artists of all kinds who have a unique story to tell.
 The submission piece may be grim, whimsical, funny, or thought-provoking.
 Very simply, we are looking for pieces that stick with people long after
 they have first read or witnessed them. The Little Journal is based on the saying
 “Good things come in small packages. ” The journal is one of the smallest online publishers of
  Northeast India and is aimed at presenting high quality pieces that are linguistically and
  aesthetically beautiful, ambitious,  and inspiring. To know more about submitting your work
  for our first issue, visit our Guidelines page.`;
    this.metaTagService.addTags(
      {
        title: 'Little Journal NorthEast posts',
        description
      }
    );
  }

}
