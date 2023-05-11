import { Component } from '@angular/core';
import { IArticle } from 'src/app/interfaces/article.interface';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-c-sidebar',
  templateUrl: './c-sidebar.component.html',
  styleUrls: ['./c-sidebar.component.scss']
})
export class CSidebarComponent {
  articles: IArticle[] = [];

  constructor(newsService: NewsService){
    newsService.getArticles(5).then((articles) => {
      this.articles = articles;
    })
  }
}
