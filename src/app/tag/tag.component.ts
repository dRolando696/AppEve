import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  public image?:string;
  public Titulo:string="INTERPOLACION";
  @Input() dataEntrante:any;
  constructor() { }

  ngOnInit(): void {
    this.image = "https://thepcenthusiast.com/wp-content/uploads/2021/01/msi-rtx-3080-suprim-x-review-17.jpg"
  }

}
