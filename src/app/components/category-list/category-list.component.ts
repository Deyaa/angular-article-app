import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs/internal/Subscription';
import { CategoriesService } from 'src/app/services/categories.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, OnDestroy, AfterViewInit {

  dataSourceCategories: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'actions'];
  private subscription!: Subscription;

  constructor(private catService: CategoriesService) {
    // Use async service:
    this.subscription = this.catService
      .getCategoriesAsync()
      .subscribe((data: any) => {

        this.dataSourceCategories = new MatTableDataSource();
        this.dataSourceCategories.data = data;
        this.dataSourceCategories.paginator = this.paginator;
      });
  }

  ngAfterViewInit() {
    this.dataSourceCategories.paginator = this.paginator;
  }

  ngOnInit(): void { }

  // פונקציה המופעלת אוטומטית ברגע שהרכיב נהרס
  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // בכדי שיפסיק להאזין Observable-שחרור ה
  }

}