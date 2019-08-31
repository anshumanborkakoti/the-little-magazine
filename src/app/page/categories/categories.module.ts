import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { RouterModule, Route } from '@angular/router';
import { ReusableComponentsModule } from 'src/app/reusable/reusable-components/reusable-components.module';


const routes: Route[] = [
  {
    path: '',
    component: CategoriesListComponent,
    pathMatch: 'full'
  },
  {
    path: 'posts',
    loadChildren: () => import('../posts/posts.module').then(m => m.PostsModule)
  }
];
@NgModule({
  declarations: [
    CategoriesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReusableComponentsModule
  ]
})
export class CategoriesModule { }
