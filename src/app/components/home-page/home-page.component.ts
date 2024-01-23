import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.productListApi()
  }

  productData:any=[]

  productListApi(){
    this.http.get('./assets/json/product.json').subscribe(data=>{
      console.log(data)
      this.productData = data

    })
  }

  productGet(id) {
    for(let i=0;i<this.productData.length; i++){
      var data=this.productData[i]
      if(data.id==id){
        console.log(data)
      }
    }
  }

}
