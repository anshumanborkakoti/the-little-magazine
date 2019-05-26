import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppBootstrapModule } from './bootstrap.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainRoutesModule } from './routes/main-routes/main-routes.module';
import { APP_BASE_HREF } from '@angular/common';
import { TitleComponent } from './title/title.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TitleComponent
  ],
  imports: [BrowserModule, AppBootstrapModule, MainRoutesModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
