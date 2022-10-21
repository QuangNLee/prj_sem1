import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Search } from 'app/model/search';
import { SearchService } from 'app/service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  index = ["id", "productName", "brandID", "Gender", "image", "content", "rating", "origin", "price", "status"];
  listSearch : Search[] = [];

  constructor(private activatedRoute : ActivatedRoute, public httpClient : HttpClient, private searchService : SearchService) { }
  @Input() id!: number | string;
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params.q);
      this.searchService.getSearch(params.q).subscribe
      (
        (data) => {
          this.listSearch = data;
        },
        (error) => {
            console.log(error);
        }
      )
    })
  }

}
