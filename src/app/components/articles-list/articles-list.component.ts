import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  public articlesType: string;

  constructor() {
    this.articlesType = "all";
  }

  ngOnInit(): void {
  }

}
