import { Injectable } from "@angular/core";
import { Article } from "../models/article.model";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

@Injectable()
export class ArticlesService {

    // לשרת מרוחק ולהביא מידע AJAX אובייקט המסוגל לבצע גלישת httpClient
    constructor(private httpClient: HttpClient) { }

    public getArticleAsync(): Observable<Article[]> {
        return this.httpClient.get<Article[]>("http://localhost:22864/articles")
            .pipe(
                map((articles: Article[]) => {
                    console.log(articles);
                    return articles;
                }));
    }

    public getCategoryArticleAsync(id: number): Observable<Article[]> {
        return this.httpClient.get<Article[]>("http://localhost:22864/articles/" + id)
            .pipe(
                map((articles: Article[]) => {
                    console.log(articles);
                    return articles;
                }));
    }

    public updateFavoriteArticleAsync(id: number, article: Article): Observable<Article> {
        console.log('in service');
        console.log(article);
        return this.httpClient.put<Article>("http://localhost:22864/articles/" + id, article)
            .pipe();
    }

    public getFavoriteArticlesAsync(): Observable<Article[]> {
        return this.httpClient.get<Article[]>("http://localhost:22864/favorite-articles")
            .pipe(
                map((articles: Article[]) => {
                    console.log(articles);
                    return articles;
                }));
    }
}