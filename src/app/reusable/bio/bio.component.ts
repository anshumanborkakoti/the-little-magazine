import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { BioModel } from './bio.model';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  @Input() bio: BioModel;

  constructor() { }

  ngOnInit() {
  }

}
