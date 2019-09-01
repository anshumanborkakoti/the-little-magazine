import { NgModule } from '@angular/core';
import { PoetryDetailComponent } from './poetry/poetry-detail/poetry-detail.component';
import { EssayDetailComponent } from './essays/essay-detail/essay-detail.component';
import { PhotographyDetailComponent } from './photography/photography-detail/photography-detail.component';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { RouterModule, Route } from '@angular/router';
import { ReusableComponentsModule } from 'src/app/reusable/reusable-components.module';

const routes: Route[] = [
  {
    path: '',
    component: PostListComponent,
    pathMatch: 'full'
  },
  {
    path: 'Poetry/:postid',
    component: PoetryDetailComponent
  },
  {
    path: 'Essays/:postid',
    component: EssayDetailComponent
  },
  {
    path: 'Photographs/:postid',
    component: PhotographyDetailComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReusableComponentsModule
  ],
  declarations: [
    PoetryDetailComponent,
    EssayDetailComponent,
    PhotographyDetailComponent,
    PostListComponent
  ]
})
export class PostsModule { }
