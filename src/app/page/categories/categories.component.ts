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
      footer: '11th June 2016'
    },
    {
      name: 'Poetry',
      imagePath: '../../../assets/img/cs_opt.png',
      description: 'The best of poetry',
      footer: '11th June 2016'
    },
    {
      name: 'Poetry',
      imagePath: '../../../assets/img/cs_opt.png',
      description: 'The best of poetry',
      footer: '11th June 2016'
    },
    {
      name: 'Poetry',
      imagePath: '../../../assets/img/cs_opt.png',
      description: 'The best of poetry',
      footer: '11th June 2016'
    },
    {
      name: 'Poetry',
      imagePath: '../../../assets/img/cs_opt.png',
      description: 'The best of poetry',
      footer: '11th June 2016'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
