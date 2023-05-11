import { Component } from '@angular/core';
import { IArticle } from 'src/app/interfaces/article.interface';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-p-posts',
  templateUrl: './p-posts.component.html',
  styleUrls: ['./p-posts.component.scss']
})
export class PPostsComponent {
  articles: IArticle[] = [];

  constructor
    (newsService : NewsService)
   {
    newsService.getArticles().then((articles) => {
      this.articles = articles;
    })
  }
}
