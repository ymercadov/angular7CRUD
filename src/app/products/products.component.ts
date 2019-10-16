import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']

})

export class ProductsComponent implements OnInit {

displayedColumns: string[] = ['prod_name', 'prod_price'];
data: Product[] = [];
//isLoadingResults = true;

constructor(private api: ApiService) { }

  ngOnInit() {
   // this.isLoadingResults = false;
  }

}


