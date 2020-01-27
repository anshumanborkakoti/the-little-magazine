import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent implements OnInit {
  @Input() headerImagePath;
  @Input() imageCaption;
  @Input() header;
  @Input() bodyContent;
  @Input() footerContent;
  @Input() imageCredit;
  @Input() showImage = true;
  @Input() alt = '';

  constructor() { }

  ngOnInit() { }
}
