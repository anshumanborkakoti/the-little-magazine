import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapModule } from '../bootstrap/bootstrap.module';
import { CommentsComponent } from './comments.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BootstrapModule
  ],
  exports: [
    CommentsComponent
  ]
})
export class CommentsModule { }
