import { Component, OnInit } from '@angular/core';
import { MastHeadService } from './masthead.service';
import { MastHead } from './masthead.model';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss'],
})
export class MastheadComponent implements OnInit {

  constructor(public mastHeadService: MastHeadService) { }

  ngOnInit() {

  }

  getContent(): MastHead[] {
    return this.mastHeadService.getMastHeadContent().slice();
  }

}
