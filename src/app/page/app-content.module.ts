import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { ContactusComponent } from './contactus/contactus.component';
import { IssuesComponent } from './issues/issues.component';
import { MastheadComponent } from './masthead/masthead/masthead.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { MainRoutesRoutingModule } from '../routes/main-routes/main-routes-routing.module';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { ReusableComponentsModule } from '../reusable/reusable-components.module';
import { IssueDetailComponent } from './issues/issue-detail.component';

@NgModule({
  declarations: [
    MainPageComponent,
    AboutusComponent,
    SubmissionsComponent,
    ContactusComponent,
    IssuesComponent,
    MastheadComponent,
    GuidelinesComponent,
    IssueDetailComponent
  ],
  imports: [
    CommonModule,
    MainRoutesRoutingModule,
    ReusableComponentsModule,
    CloudinaryModule
  ],
  exports: [
    MainPageComponent,
    AboutusComponent,
    SubmissionsComponent,
    ContactusComponent,
    IssuesComponent,
    MastheadComponent,
    GuidelinesComponent,
    IssueDetailComponent
  ]
})
export class ContentModule { }
