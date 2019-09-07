import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { makeid } from 'src/app/common/util/utils';
import { Thumbnail } from 'src/app/models/thumbnail.model';
import { Image } from 'src/app/models/image.model';
import { All_Categories } from 'src/assets/mock-data/data.mock';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getCategories(): Category[] {
    return All_Categories;
  }


}
