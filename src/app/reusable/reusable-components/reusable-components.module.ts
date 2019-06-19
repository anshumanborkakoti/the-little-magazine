import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TilesComponent } from '../tiles/tiles.component';

@NgModule({
  declarations: [TilesComponent],
  imports: [CommonModule, FormsModule],
  exports: [TilesComponent]
})
export class ReusableComponentsModule {}
