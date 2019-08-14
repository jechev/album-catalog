import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/_models/review';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {
  @Input() review: Review;
  constructor() {}

  ngOnInit() {}
}
