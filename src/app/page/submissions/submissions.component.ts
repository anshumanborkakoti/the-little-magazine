import { Component, OnInit } from '@angular/core';

@Component({
  template: `<div class="process">
  <div class='h6 first'>Process Page</div><p>Because&nbsp;pictures and words tell stories,
  <em>The Little Journal</em> invites submissions of visual content, (artwork, photographs,
    and illustrations), poems, and flash fiction, and creative nonfiction (interviews, personal essays,
       and travel essays). We want pieces that don&rsquo;t just tell a story, but make one feel, hear,
       and think.</p><p>If you have any pieces that fit the requirements listed in our
       <a href="/guidelines">Guidelines</a>&nbsp;page, send your submissions
       to&nbsp;<a href="mailto:littlejournal.ne@gmail.com">littlejournal.ne@gmail.com</a>.</p>
       <div class='h9'>Response Time</div><p>We are a small team and we review every submission with
       diligence, love, and care that we believe every creative piece deserves. The estimated response&nbsp;time
       for a submission is four weeks. If you don&rsquo;t hear from us for more than six weeks, please send a query.</p>
       <div class='h9'>Returning contributors</div><p>If your work has been published
       in the journal earlier, please wait at least three months before submitting again. If your submission has not
        been accepted, don&rsquo;t take it personally. It just means that it wasn&rsquo;t right for our journal at this time.
         We&rsquo;d love to see your work again, but do wait at least a month before submitting new work.&nbsp;</p>
         <div class='h9'>Publication</div><p>By submitting to <em>The Little Journal,</em>
         you grant us first publishing rights &amp; non-exclusive electronic permissions (for online archival purposes).
          All submissions remain foremost the intellectual property of the author/artist and rights revert to the author
          /artist upon publication. However, later, if your work is published elsewhere, please credit us mentioning that
          the piece was <em>first</em> published in <em>The Little Journal of Northeast India</em>.</p>
          <div class='h9'>Disclaimer</div><p>The work published by <em>The Little Journal</em> is considered
           to be correct at the time of publication. The accuracy and authenticity of the published work here lies solely
           with the author/artist and the opinions/views presented here do not necessarily represent those of the journal.
           </p><div class='h9'>Payment</div><p><em>The</em> <em>Little Journal</em> was born out of sheer
            love and admiration for the creative arts and we don&rsquo;t charge any submission or reading fees.&nbsp;
            </p><p>&nbsp;</p><p>Being a not-for-profit journal, we cannot offer payment beyond publication, support
            and exposure. However, you will have our unconditional gratitude for trusting us with your work, and if
            we ever meet, maybe cake. We love cake.</p>
      </div>`,
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
