import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
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
      {titulo:'video 1', subtitulo:'sub video 1'},
      {titulo:'video 2', subtitulo:'sub video 2'},
      {titulo:'video 3', subtitulo:'sub video 3'},
    ]
  }
}
