import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <div class="contactus"> <div class="h6 first">Contact Us</div> <p>
  If you have any questions, would like to collaborate with us or just send a few friendly words,
   write to us at <a href="mailto:littlejournal.ne@gmail.com">littlejournal.ne@gmail.com</a> </p>
    <p> We’re also looking for talented illustrators who can create editorial illustrations to be
    presented along with the literary content that we publish. If you’re an illustrator and would like
    your work to be featured, please share your portfolio with us. </p> <p> We are now live on Facebook,
     Instagram and Pinterest! Like and follow us so we can keep you posted on our work, submissions,
     news and more. </p></div>`,
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
