import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainRoutesModule } from './routes/main-routes/main-routes.module';
import { APP_BASE_HREF } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

export const cloudinaryLib = {
  Cloudinary: Cloudinary
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MainRoutesModule,
    CloudinaryModule.forRoot(cloudinaryLib, { cloud_name: environment.cloudinary_cloud_name }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
