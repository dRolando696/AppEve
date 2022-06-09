import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  image:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = '1 App ANGULAR';
  public ArrayTags: Tarjeta[]=[]

  ngOnInit(): void{

    this.ArrayTags = [
      {titulo:'video 1', subtitulo:'sub video 1', image:"https://media.urgente24.com/p/155ace48722fca38499bf133b814324e/adjuntos/319/imagenes/002/613/0002613372/eth2-1jpg.jpg"},
      {titulo:'video 2', subtitulo:'sub video 2', image:"https://static.vecteezy.com/system/resources/previews/003/321/403/non_2x/cardano-or-ada-coin-banner-ada-coin-cryptocurrency-concept-banner-vector.jpg"},
      {titulo:'video 3', subtitulo:'sub video 3', image:"https://i2.wp.com/criptotendencia.com/wp-content/uploads/2021/05/Solana-SOL-marca-un-nuevo-maximo-historico-mientras-el-mercado-retrocede.jpg?fit=1200%2C800"},
    ]
  }
}
