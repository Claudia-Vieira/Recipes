import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: '<h1>Page not Found!</h1><br><p>The URL does not exist...</p>',
  styles: ['h1,p{text-align:center; margin-top:50px}']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
