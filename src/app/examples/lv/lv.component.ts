import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lv } from 'app/model/lvs';
import { LvService } from 'app/service/lv.service';

@Component({
  selector: 'app-lv',
  templateUrl: './lv.component.html',
  styleUrls: ['./lv.component.css']
})
export class LVComponent implements OnInit {
  index = ["id", "productName", "brandID", "Gender", "image", "content", "rating", "origin", "price", "status"];
  listLv : Lv[] = [];

  constructor(private activatedRoute : ActivatedRoute, public httpClient : HttpClient, private lvService : LvService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params.q);
      this.lvService.getProduct().subscribe
      (
        (data) => {
          this.listLv = data;
          console.log(data);
        },
        (error) => {
            console.log(error);
        }
      )
    })
  }

}
