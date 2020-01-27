import { Component, OnInit } from '@angular/core';
import { MetaTagService } from 'src/app/meta-tag.service';

@Component({
  template: `
  <div class="contactus"> <div class="h6 first">Contact Us</div> <p>
  If you have any questions, would like to collaborate with us or just send a few friendly words,
   write to us at <a href="mailto:littlejournal.ne@gmail.com">littlejournal.ne@gmail.com</a>. </p>
    <p> We’re also looking for talented illustrators who can create editorial illustrations to be
    presented along with the literary content that we publish. If you’re an illustrator and would like
    your work to be featured, please share your portfolio with us. </p> <p> We are now live on Facebook,
     Instagram and Pinterest! Like and follow us so we can keep you posted on our work, submissions,
     news and more. </p></div>
      <div class="socialIcons"> <ul> <li> <a href="https://www.facebook.com/thelittlejournalofneindia/" target="_blank">
       <img src="../../assets/img/icons/_ionicons_svg_logo-facebook.svg" alt="Facebook" /> </a> </li> <li>
       <a href="https://twitter.com/TNeindia" target="_blank">
       <img src="../../assets/img/icons/_ionicons_svg_logo-twitter.svg" alt="Twitter" /> </a> </li> <li>
       <a href="https://www.pinterest.com/little5114" target="_blank">
       <img src="../../assets/img/icons/_ionicons_svg_logo-pinterest.svg" alt="Pinterest" /> </a> </li> <li>
       <a href="https://www.instagram.com/thelittlejournal.neindia/" target="_blank">
        <img src="../../assets/img/icons/_ionicons_svg_logo-instagram.svg" alt="Instagram" /> </a> </li> <li>
        <a href="https://www.tumblr.com/blog/thelittlejournalofnortheastindia" target="_blank">
        <img src="../../assets/img/icons/_ionicons_svg_logo-tumblr.svg" alt="Tumblr" /> </a> </li> </ul>
         </div>
     `,
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor(
    private metaTagService: MetaTagService
  ) { }

  ngOnInit() {
    this.addMetaInfo();
  }

  private addMetaInfo() {
    const description = `Contact Us
If you have any questions, would like to collaborate with us or just send a few friendly words, write to us at littlejournal.ne@gmail.com.
We’re also looking for talented illustrators who can create editorial illustrations to be presented
 along with the literary content that we publish. If you’re an illustrator and would like your work
 to be featured, please share your portfolio with us.
We are now live on Facebook, Instagram and Pinterest! Like and follow us so we can keep you posted
 on our work, submissions, news and more.`;
    this.metaTagService.addTags(
      {
        title: 'Little Journal NorthEast Contact Us',
        description
      }
    );
  }

}
