import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('Home Component');

    meta.addTags([
      { name: 'author', content: 'draconian' },
      { name: 'keywords' , content: 'seo test' },
      { name: 'description', content: 'testtesttest' }
    ]);
  }

  ngOnInit() {
  }

}
