import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from 'src/models/articles';
import { ArticleService } from '../Services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles$!: Observable<Article[]>;
  constructor(private readonly articleServices: ArticleService) { }

  ngOnInit(): void {
    this.articles$ =this.articleServices.articles$;
  }

}
