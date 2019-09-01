import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TilesComponent } from './tiles/tiles.component';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { PostDetailForTextComponent } from './post-detail-for-text/post-detail-for-text.component';
import { BioComponent } from './bio/bio.component';

@NgModule({
  declarations: [TilesComponent, PostDetailForTextComponent, BioComponent],
  imports: [CommonModule, FormsModule, CloudinaryModule],
  exports: [TilesComponent, PostDetailForTextComponent, BioComponent]
})
export class ReusableComponentsModule { }
