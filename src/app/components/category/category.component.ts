import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public articlesType: string;
  public id: number;

  // ActivatedRoute - הנוכחי Route-מידע לגבי ה
  constructor(private activatedRoute: ActivatedRoute) {
    this.articlesType = "byCategoryId";
  }

  ngOnInit(): void {
    let id: number = Number(this.activatedRoute.snapshot.params["id"]);
    this.id = id;
  }
}
