import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
//import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { FormControl, FormGroup, Validators, FormBuilder, NgForm, FormGroupDirective } from '@angular/forms';

const ctrl = new FormControl('some value');
console.log(ctrl.value);

const form = new FormGroup({
  first: new FormControl('Nancy', Validators.minLength(2)),
  last: new FormControl('Drew'),
});

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})

export class ProductAddComponent implements OnInit {

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }
  //user: FormGroup;

  productForm: FormGroup;
  prod_name: string = '';
  prod_desc: string = '';
  prod_price: number = null;
  updated_at: Date = null;
  isLoadingResults = false;

  ngOnInit() {
    /*this.user = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('', Validators.required),
      passwordRepeat: new FormControl('', Validators.required)
    });*/

    this.productForm = this.formBuilder.group({
      'prod_name' : [null, Validators.required],
      'prod_desc' : [null, Validators.required],
      'prod_price' : [null, Validators.required]
      });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
debugger
    /*console.log(form['prod_name']);
    console.log(form['prod_desc']);*/
    this.api.addProduct(form)
      .subscribe(res => {
          let id = res['_id'];
          this.isLoadingResults = false;
          //this.router.navigate(['/product-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }



/*
  passwordMatchValidator(g: FormGroup){
    return g.get('password').value === g.get('passwordRepeat').value
    ? null : {'mismatch' : true};
  }
  OnSubmit(){
    alert('entre aqui');
  }*/

}



