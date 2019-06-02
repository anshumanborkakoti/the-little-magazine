import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from 'src/app/page/main-page/main-page.component';
import { AboutusComponent } from 'src/app/page/aboutus/aboutus.component';
import { ContentModule } from 'src/app/page/app-content.module';
import { CategoriesComponent } from 'src/app/page/categories/categories.component';
import { SubmissionsComponent } from 'src/app/page/submissions/submissions.component';
import { ContactusComponent } from 'src/app/page/contactus/contactus.component';
import { IssuesComponent } from 'src/app/page/issues/issues.component';
import { MastheadComponent } from 'src/app/page/masthead/masthead/masthead.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainPageComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'submissions',
    component: SubmissionsComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'issues',
    component: IssuesComponent
  },
  {
    path: 'masthead',
    component: MastheadComponent
  },
  {
    path: '**',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ContentModule],
  exports: [RouterModule]
})
export class MainRoutesRoutingModule {}
