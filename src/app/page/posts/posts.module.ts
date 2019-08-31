import { NgModule } from '@angular/core';
import { PoetryListComponent } from './poetry/poetry-list/poetry-list.component';
import { PoetryDetailComponent } from './poetry/poetry-detail/poetry-detail.component';
import { EssayDetailComponent } from './essays/essay-detail/essay-detail.component';
import { EssayListComponent } from './essays/essay-list/essay-list.component';
import { PhotographyListComponent } from './photography/photography-list/photography-list.component';
import { PhotographyDetailComponent } from './photography/photography-detail/photography-detail.component';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { RouterModule, Route } from '@angular/router';
import { ReusableComponentsModule } from 'src/app/reusable/reusable-components/reusable-components.module';

const routes: Route[] = [
  {
    path: '',
    component: PostListComponent,
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReusableComponentsModule
  ],
  declarations: [
    PoetryListComponent,
    PoetryDetailComponent,
    EssayDetailComponent,
    EssayListComponent,
    PhotographyListComponent,
    PhotographyDetailComponent,
    PostListComponent,
    PostDetailComponent
  ]
})
export class PostsModule { }
