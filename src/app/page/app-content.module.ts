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
import { MainRoutesRoutingModule } from '../routes/main-routes/main-routes-routing.module';
import { ReusableComponentsModule } from '../reusable/reusable-components/reusable-components.module';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { environment } from 'src/environments/environment';
import { Cloudinary } from 'cloudinary-core';

export const cloudinaryLib = {
  Cloudinary: Cloudinary
};

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
  imports: [
    CommonModule,
    MainRoutesRoutingModule,
    ReusableComponentsModule,
    CloudinaryModule.forRoot(cloudinaryLib, { cloud_name: environment.cloudinary_cloud_name })
  ],
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
export class ContentModule { }
