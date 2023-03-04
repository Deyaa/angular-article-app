import { Category } from "../models/category.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";


// :עלינו להגדיר את הפקודה הבאה DI-שאנו בונים, צריך להשתמש ב Service אם
@Injectable()
export class CategoriesService { // Custom Service

    // לשרת מרוחק ולהביא מידע AJAX אובייקט המסוגל לבצע גלישת httpClient
    constructor(private httpClient: HttpClient) { }

    public getCategoriesAsync(): Observable<Category[]> {
        return this.httpClient.get<Category[]>("http://localhost:22864/categories")
            .pipe(
                map((categories: Category[]) => {
                    console.log(categories);
                    return categories;
                }));
    }
}