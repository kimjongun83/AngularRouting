import { Injectable } from '@angular/core';
import { Observable,map, of, shareReplay } from 'rxjs';
import { Article } from '../Models/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  get articles$(){
    
    return of<Article[]>(
      [
        {
          title: 'Title1',body: 'asdasdasdasdasdasdasd',slug:'title-1'
        },
        {
          title: 'Title2',body: '22asedadasdasdasd',slug:'title2'
        }
      ]).pipe(shareReplay(1));
  }

  getArticle(slug:string): Observable<Article | undefined>{
      return this.articles$.pipe(map(articles => articles.find( ar => ar.slug === slug)))
  }
}
