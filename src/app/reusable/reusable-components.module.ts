import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TilesComponent } from './tiles/tiles.component';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { CommonPostDetailComponent } from './common-post-detail/common-post-detail.component';
import { BioComponent } from './bio/bio.component';
import { PhotoTilesComponent } from './photo-tiles/photo-tiles.component';
import { RemoveSpaces } from './remove-space.pipe';
import { PhotoCreditPipe } from './photo-credit.pipe';
import { SpinnerComponent } from './spinner/spinner.component';
import { CommentsModule } from './comments/comments.module';

@NgModule({
  declarations: [
    TilesComponent,
    CommonPostDetailComponent,
    BioComponent,
    PhotoTilesComponent,
    RemoveSpaces,
    PhotoCreditPipe,
    SpinnerComponent
  ],
  imports: [CommonModule, FormsModule, CloudinaryModule, CommentsModule],
  exports: [
    TilesComponent,
    CommonPostDetailComponent,
    BioComponent,
    PhotoTilesComponent,
    RemoveSpaces,
    SpinnerComponent
  ]
})
export class ReusableComponentsModule { }
