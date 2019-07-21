import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/image.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: [
    './man-page-breakpoints.component.scss',
    './main-page.component.scss'
  ]
})
export class MainPageComponent implements OnInit {
  mainImageSource: string;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.mainImageSource = this.imageService.getImage('Typewriter_main_page');
  }
}
