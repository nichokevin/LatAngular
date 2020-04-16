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

  user = {
    nama: 'abc'
  }
  
  a: boolean = true;
  b: boolean = false;

  //event
  Pesan = '';
  Klikbtn(){
    this.Pesan = "Tombol di tekan";
  }

  //Latihan
  v1=2;
  v2=3;
  hasil= Math.pow(this.v1,this.v2);
  value = '';
  click(){
    this.value = "Tombol di tekan";
  }
}
