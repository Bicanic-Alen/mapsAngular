import { Component } from '@angular/core';
import { Point } from 'src/models/point.model';


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

  lat3:number = 45.487215;
  lng3:number = 9.205372;

  lat4:number = 45.489826;
  lng4:number = 9.127523;




  color:string;
  colorR:string;
  constructor(){}
  onClickRed() : boolean{
    this.color="red";
    return false
  }
  onClickVerde() : boolean{
    this.color="green";
    return false
  }
  onClickBlu() : boolean{
    this.color="blue";
    return false
  }

  onClickRYellow() : boolean{
    this.colorR="yellow";
    return false
  }
  onClickRVerde() : boolean{
    this.colorR="green";
    return false
  }
  onClickRBlu() : boolean{
    this.colorR="blue";
    return false
  }

  icon =  {
    url:'/assets/img/99 - cat_acrobat.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  };

  icon2 = {
    url:'/assets/img/31_104880.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  }
   icon3 = {
    url:'/assets/img/SubwayTrain_Green_icon-icons.com_54890.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  }
   icon4 = {
    url:'/assets/img/bus_icon-icons.com_76529.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  }



   triangle: Array<Point> =
  [
    {lng:9.1, lat:45.5},
    {lng:9.0, lat:45.6},
    {lng:9.0, lat:45.4}
  ]

  rettangolo: Array<Point> =
  [
    {lng:9.0, lat:45.6},
    {lng:9.0, lat:45.4},
    {lng:8.1, lat:45.4},
    {lng:8.1, lat:45.6}
  ]


}



