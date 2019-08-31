import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from '../categories.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoriesService, private router: Router, private acRoute: ActivatedRoute) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  onCategorySelected(categoryId: string) {
    const navExtra: NavigationExtras = {
      queryParams: {
        categoryId
      }
    };
    this.router.navigate(['/categories/posts'], navExtra);
  }
}
