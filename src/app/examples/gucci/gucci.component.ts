import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gucci } from 'app/model/guccies';
import { GucciService } from '../../service/gucci.service'

@Component({
  selector: 'app-gucci',
  templateUrl: './gucci.component.html',
  styleUrls: ['./gucci.component.css']
})
export class GucciComponent implements OnInit {
  index = ["id", "productName", "brandID", "Gender", "image", "content", "rating", "origin", "price", "status"];
  listGucci : Gucci[] = [];
  constructor(private activatedRoute : ActivatedRoute, public httpClient : HttpClient, private gucciService : GucciService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params.q);
      this.gucciService.getProduct().subscribe
      (
        (data) => {
          this.listGucci = data;
          console.log(data);
        },
        (error) => {
            console.log(error);
        }
      )
    })
  }

}
