import { Injectable } from '@angular/core';
import { IArticle } from 'src/app/interfaces/article.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
// https://api.spaceflightnewsapi.net/v3?_limit=50 -> Query params
// https://api.spaceflightnewsapi.net/v3/articles/120 -> Path params

  urlApi: string = 'https://api.spaceflightnewsapi.net/v3';
  constructor() { }

  getArticles(limit: number = 50): Promise<IArticle[]> {
    return fetch(`${this.urlApi}/articles?_limit=${limit}`)
    .then(response => response.json());
  }

  getArticleById(id: string): Promise<IArticle> {
    return fetch(`${this.urlApi}/articles/${id}`)
    .then(response => response.json());
  }

}
