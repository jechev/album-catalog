import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from 'src/app/_services/review.service';
import { Review } from 'src/app/_models/review';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  newReview: Review = new Review();
  optradio;
  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService
  ) {}

  ngOnInit() {}

  addReview(form) {
    console.log(form);
    this.newReview.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.newReview.postDate = new Date(Date.now());
    this.reviewService
      .addReview(this.newReview)
      .then(res => {
        form.reset();
      })
      .catch(err => {
        console.log(err);
      });
  }
}
