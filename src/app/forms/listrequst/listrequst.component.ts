import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
// import {Http} from "@angular/http";
// import { TableComponent } from 'angular2-datagrid/src/app/demo';
import { PagerService } from './services/pager.service';

declare var $: any;
@Component({
  selector: 'app-listrequst',
  templateUrl: './listrequst.component.html',
  styleUrls: ['./listrequst.component.css'],
  providers: [ PagerService],
  encapsulation: ViewEncapsulation.None
})
// export class ListrequstComponent  {
//   public gridData:any;
//
//   constructor(private  _http: Http) {
//
//     this._http.get('https://jsonplaceholder.typicode.com/photos').subscribe(result => this.gridData = result.json());
//   }
//
//
//
// }
export class ListrequstComponent implements OnInit {
  constructor(private http: Http, private pagerService: PagerService) { }

  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager : any = {};

  // paged items
  pagedItems: any[];

  ngOnInit() {
    // get dummy data
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .map((response: Response) => response.json())
      .subscribe(data => {
        // set items to json response
        this.allItems = data;

        // initialize to page 1
        this.setPage(1);
      });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}



