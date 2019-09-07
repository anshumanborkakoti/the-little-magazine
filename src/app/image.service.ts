import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cloudinary } from '@cloudinary/angular-5.x';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private imageUrlPrefix: string;

  constructor(private cloudinary: Cloudinary) {
    this.imageUrlPrefix = environment.cloudinary_deliveryUrl_prefix;
  }

  getImage(name: string): string {
    return this.cloudinary.cloudinaryInstance.url(`${this.imageUrlPrefix}/${name}`, { secure: true });
  }

  getUnprefixedImage(name: string): string {
    return this.cloudinary.cloudinaryInstance.url(`${name}`, { secure: true });
  }
}
