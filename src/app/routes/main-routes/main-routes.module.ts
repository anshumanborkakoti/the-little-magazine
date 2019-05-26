import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutesRoutingModule } from './main-routes-routing.module';
import { ContentModule } from 'src/app/page/app-content.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ContentModule, MainRoutesRoutingModule],
  exports: [MainRoutesRoutingModule]
})
export class MainRoutesModule {}
