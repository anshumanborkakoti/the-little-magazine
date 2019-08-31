import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TilesComponent } from '../tiles/tiles.component';
import { CloudinaryModule } from '@cloudinary/angular-5.x';

@NgModule({
  declarations: [TilesComponent],
  imports: [CommonModule, FormsModule, CloudinaryModule],
  exports: [TilesComponent]
})
export class ReusableComponentsModule { }
