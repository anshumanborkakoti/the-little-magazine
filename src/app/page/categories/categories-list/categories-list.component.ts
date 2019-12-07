import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from '../categories.service';
import { Router, NavigationExtras, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ImageService } from 'src/app/image.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit, OnDestroy {
  categories: Category[] = [];
  constructor(
    private categoryService: CategoriesService,
    private router: Router,
    protected imageService: ImageService
  ) { }

  private categoriesSubscription = new Subscription();
  private isLoadingSubscription = new Subscription();
  isLoading = false;

  ngOnInit() {
    this.categoryService.getIsLoading().subscribe(aIsLoading => this.isLoading = aIsLoading);
    this.categoriesSubscription = this
      .categoryService
      .getCategoriesChanged()
      .subscribe(aCategories => {
        if (Array.isArray(aCategories)) {
          this.categories = [...aCategories];
        } else {
          this.categories = [aCategories];
        }
      });
    this.categoryService.getAllCategories();
  }

  onCategorySelected(categoryId: string) {
    const navExtra: NavigationExtras = {
      queryParams: {
        categoryId
      }
    };
    this.router.navigate(['/categories/posts'], navExtra);
  }

  ngOnDestroy(): void {
    this.categoriesSubscription.unsubscribe();
    this.isLoadingSubscription.unsubscribe();
  }
}
