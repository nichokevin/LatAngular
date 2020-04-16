import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Kevin';

  //array
  item = [{
    nama : 'Buah jeruk',
    harga : 10000
  },{
    nama : 'Buah naga',
    harga : 20000
  }];
  itemArr = [1,2,3,4,5];

  //if
  show: boolean = true;

  user={
    nama: 'abc'
  }
  
}
