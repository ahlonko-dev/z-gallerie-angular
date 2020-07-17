import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  imgPath:any="../../../src/images/bert.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
