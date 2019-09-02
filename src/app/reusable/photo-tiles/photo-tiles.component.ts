import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/models/image.model';

@Component({
  selector: 'app-photo-tiles',
  templateUrl: './photo-tiles.component.html',
  styleUrls: ['./photo-tiles.component.scss']
})
export class PhotoTilesComponent implements OnInit {
  @Input() image: Image;
  @Input() imageCaption: string;
  constructor() { }

  ngOnInit() {
  }

}
