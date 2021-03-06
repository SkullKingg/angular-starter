import { Component, OnInit } from '@angular/core';

import { AuthorService, Author } from '../author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: Author[] = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.authorService.getAll().subscribe(
      (authorData: Author[]) => this.authors = authorData
    );
  }
}
