import { Component, Input, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticlesService } from 'src/app/services/articles.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-articles',
  templateUrl: './table-articles.component.html',
  styleUrls: ['./table-articles.component.css']
})
export class TableArticlesComponent implements OnInit, OnDestroy, AfterViewInit {

  //this field data will be coming from parent's data. It receives the data before calling the ngOnInit() method
  @Input() articleType: string;
  @Input() categoryId: number;

  displayedColumns: string[] = ['title', 'description', 'image', 'category', 'actions'];

  dataSourceArticles: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  private subscription!: Subscription;

  constructor(private articlesService: ArticlesService) { }

  ngAfterViewInit() {
    this.dataSourceArticles.paginator = this.paginator;
  }

  ngOnInit(): void {
    switch (this.articleType) {
      case "all":
        // Use async service:
        this.subscription = this.articlesService
          .getArticleAsync()
          .subscribe((data: any) => {

            this.dataSourceArticles = new MatTableDataSource();
            this.dataSourceArticles.data = data;
            this.dataSourceArticles.paginator = this.paginator;
          });
        break;
      case "favorite":
        this.subscription = this.articlesService
          .getFavoriteArticlesAsync()
          .subscribe((data: any) => {

            this.dataSourceArticles = new MatTableDataSource();
            this.dataSourceArticles.data = data;
            this.dataSourceArticles.paginator = this.paginator;
          });
        break;
      case "byCategoryId":
        this.subscription = this.articlesService
          .getCategoryArticleAsync(this.categoryId)
          .subscribe((data: any) => {

            this.dataSourceArticles = new MatTableDataSource();
            this.dataSourceArticles.data = data;
            this.dataSourceArticles.paginator = this.paginator;
          });
        break;
    }
  }

  // פונקציה המופעלת אוטומטית ברגע שהרכיב נהרס
  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // בכדי שיפסיק להאזין Observable-שחרור ה
  }

  updateFavoriteArticle(element: Article): void {
    this.subscription = this.articlesService.updateFavoriteArticleAsync(element.id, element).subscribe();
    window.location.reload();
  }
}
