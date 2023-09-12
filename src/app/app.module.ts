import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticlesComponent } from './components/articles/articles.component';
import { ProductComponent } from './components/product/product.component';
import { MaterialModule } from './material/material.module';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ProductComponent,
    SocialMediaComponent,
    RecommendationsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
