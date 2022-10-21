import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Detail } from 'app/model/details';
import { DetailService } from 'app/service/detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  index = ["id", "productName", "brandID", "Gender", "image", "content", "rating", "origin", "price", "status"];
  listDetail : Detail[] = [];

  constructor(private activatedRoute : ActivatedRoute, public httpClient : HttpClient, private detailService : DetailService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params.id);
      this.detailService.getDetail(params.id).subscribe
      (
        (data) => {
          this.listDetail = data;
          console.log(data);
        },
        (error) => {
            console.log(error);
        }
      )
    })
  }

}
