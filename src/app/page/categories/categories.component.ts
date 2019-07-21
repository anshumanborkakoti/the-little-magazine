import { Component, OnInit } from '@angular/core';
import { Category } from './categories.model';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [
    {
      name: 'Poetry',
      imagePath: '../../../assets/img/cs_opt.png',
      description: 'The best of poetry',
      footer: new Date()
    },
    {
      name: 'Photographs',
      imagePath: '../../../assets/img/cs_opt.png',
      description: 'The best of photographs',
      footer: new Date()
    },
    {
      name: 'Non fiction',
      imagePath: '../../../assets/img/cs_opt.png',
      description: 'The best of essays, stories etc',
      footer: new Date()
    }
  ];
  constructor() { }

  ngOnInit() { }
}
