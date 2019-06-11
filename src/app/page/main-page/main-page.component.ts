import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: [
    './man-page-breakpoints.component.scss',
    './main-page.component.scss'
  ]
})
export class MainPageComponent implements OnInit {
  srcset = `../../../assets/img/DSCF0907_small.JPG 500w,
      ../../../assets/img/DSCF0907_medium.JPG 1000w,
      ../../../assets/img/DSCF0907_large.jpg 4896w`;
  constructor() {}

  ngOnInit() {}
}
