import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TilesComponent } from './tiles/tiles.component';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { PostDetailForTextComponent } from './common-post-detail/common-post-detail.component';
import { BioComponent } from './bio/bio.component';
import { PhotoTilesComponent } from './photo-tiles/photo-tiles.component';

@NgModule({
  declarations: [TilesComponent, PostDetailForTextComponent, BioComponent, PhotoTilesComponent],
  imports: [CommonModule, FormsModule, CloudinaryModule],
  exports: [TilesComponent, PostDetailForTextComponent, BioComponent, PhotoTilesComponent]
})
export class ReusableComponentsModule { }
