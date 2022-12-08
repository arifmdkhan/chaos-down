import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  longText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident repudiandae aliquid ex nobis doloribus quisquam!";

  constructor() { }

  ngOnInit(): void {
  }

}
