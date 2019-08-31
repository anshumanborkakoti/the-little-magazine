import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { makeid } from 'src/app/common/util/utils';
import { Thumbnail } from 'src/app/models/thumbnail.model';
import { Image } from 'src/app/models/image.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  get CATEGORY_IDS() {
    return {
      poetry: makeid(10),
      essays: makeid(10),
      photographs: makeid(10)
    };
  }

  constructor() { }

  getCategories(): Category[] {
    const image = new Image(makeid(20));
    image.publicId = 'samples/animals/kitten-playing.gif';
    image.secureUrl = 'https://res.cloudinary.com/dcom6pwyq/image/upload/v1562595115/samples/animals/kitten-playing.gif';
    const thumbnail1 = new Thumbnail(makeid(10), image, 'Poetry', 'Best of poetry', '', 'Poetry');
    const thumbnail2 = new Thumbnail(makeid(10), image, 'Essays', 'Best of Essays', '', 'Essays');
    const thumbnail3 = new Thumbnail(makeid(10), image, 'Photographs', 'Best of Photographs', '', 'Photographs');
    const cat1 = new Category('Poetry', this.CATEGORY_IDS.poetry, 'Poetry');
    const cat2 = new Category('Essays', this.CATEGORY_IDS.essays, 'Essays');
    const cat3 = new Category('Photographs', this.CATEGORY_IDS.photographs, 'Photographs');
    cat1.thumbnail = thumbnail1;
    cat2.thumbnail = thumbnail2;
    cat3.thumbnail = thumbnail3;
    return [
      cat1, cat2, cat3
    ];
  }


}
