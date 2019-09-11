import { Component, OnInit } from '@angular/core';
import { MastHeadService } from './masthead.service';
import { MastHead } from './masthead.model';
import { BioModel } from 'src/app/reusable/bio/bio.model';
import { Thumbnail } from 'src/app/models/thumbnail.model';
import { Image } from 'src/app/models/image.model';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss'],
})
export class MastheadComponent implements OnInit {


  bios: BioModel[];

  constructor(public mastHeadService: MastHeadService) { }

  ngOnInit() {

  }

  getContent(): BioModel[] {
    this.bios = this.mastHeadService.getMastHeadContent()
      .map(masthead => {
        const name = masthead.bioHeader;
        const thumbnail = new Thumbnail();
        thumbnail.image = new Image();
        thumbnail.image.secureUrl = masthead.image;
        thumbnail.content = masthead.bioContent;
        thumbnail.header = masthead.bioHeader;
        const bio = new BioModel(name, thumbnail);
        return bio;
      });
    return this.bios;
  }

}
