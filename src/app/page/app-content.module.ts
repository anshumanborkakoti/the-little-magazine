import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CategoriesComponent } from './categories/categories.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { ContactusComponent } from './contactus/contactus.component';
import { IssuesComponent } from './issues/issues.component';
import { MastheadComponent } from './masthead/masthead/masthead.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';

@NgModule({
  declarations: [
    MainPageComponent,
    AboutusComponent,
    CategoriesComponent,
    SubmissionsComponent,
    ContactusComponent,
    IssuesComponent,
    MastheadComponent,
    GuidelinesComponent
  ],
  imports: [CommonModule],
  exports: [
    MainPageComponent,
    AboutusComponent,
    CategoriesComponent,
    SubmissionsComponent,
    ContactusComponent,
    IssuesComponent,
    MastheadComponent,
    GuidelinesComponent
  ]
})
export class ContentModule {}
