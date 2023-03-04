import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesService } from './services/categories.service';
import { ArticlesService } from './services/articles.service';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import {MatButtonModule} from '@angular/material/button';
import { CategoryComponent } from './components/category/category.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { TableArticlesComponent } from './components/table-articles/table-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    CategoryListComponent,
    FavoriteListComponent,
    ThumbnailComponent,
    CategoryComponent,
    ArticlesListComponent,
    TableArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [CategoriesService, ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
