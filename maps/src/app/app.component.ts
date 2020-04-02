import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maps';
  lat: number = 45.506738;
  lng: number = 9.190766;

  lat2:number = 45.48186898;
  lng2:number = 9.17265789;

  color:string;
  constructor(){}
  onClickRed() : boolean{
    this.color="red";
    return false
  }
  onClickVerde() : boolean{
    this.color="blue";
    return false
  }
  onClickBlu() : boolean{
    this.color="green";
    return false
  }



}



