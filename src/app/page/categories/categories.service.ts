import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Category } from 'src/app/models/category.model';
import { createThumbnail } from 'src/app/models/thumbnail.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService implements OnDestroy {

  private categoriesChanged = new Subject<Category[]>();
  private isLoading = new BehaviorSubject(false);
  private allCategories: Category[];
  private isSaved = new Subject<boolean>();
  private isDeleted = new Subject<boolean>();

  constructor(private http: HttpClient) {
  }

  getCategoriesChanged(): Subject<Category | Category[]> {
    return this.categoriesChanged;
  }

  getIsLoading(): BehaviorSubject<boolean> {
    return this.isLoading;
  }

  getIsSaved(): Subject<boolean> {
    return this.isSaved;
  }

  getIsDeleted(): Subject<boolean> {
    return this.isDeleted;
  }

  getAllCategories(): void {
    this.isLoading.next(true);
    this.http.get<{ message: string, categories: any }>
      (`${environment.api_url}/categories`)
      .pipe(
        map(result => {
          return {
            categories: result.categories.map(category => {
              return new Category(
                category.name,
                category._id,
                category.label,
                createThumbnail(category.thumbnail)
              );
            })
          };
        })
      ).subscribe(categoryData => {
        this.allCategories = categoryData.categories.slice();
        this.categoriesChanged.next(this.allCategories.slice());
        this.isLoading.next(false);
        this.isSaved.next(true);
      }, error => {
        console.log(error.message);
        this.isLoading.next(false);
        this.isSaved.next(false);
      });
  }

  getCategory(id: string): Category {
    return this.allCategories.find(aCategory => aCategory.id === id);
  }

  ngOnDestroy() {
    this.categoriesChanged = null;
  }
}
