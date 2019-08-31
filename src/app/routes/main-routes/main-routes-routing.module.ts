import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainPageComponent } from 'src/app/page/main-page/main-page.component';
import { AboutusComponent } from 'src/app/page/aboutus/aboutus.component';
import { SubmissionsComponent } from 'src/app/page/submissions/submissions.component';
import { ContactusComponent } from 'src/app/page/contactus/contactus.component';
import { IssuesComponent } from 'src/app/page/issues/issues.component';
import { MastheadComponent } from 'src/app/page/masthead/masthead/masthead.component';
import { GuidelinesComponent } from 'src/app/page/guidelines/guidelines.component';

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
    loadChildren: () => import('../../page/categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: 'submissions',
    component: SubmissionsComponent
  },
  {
    path: 'guidelines',
    component: GuidelinesComponent
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
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class MainRoutesRoutingModule { }
