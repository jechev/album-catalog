import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from 'src/app/_services/review.service';
import { Review } from 'src/app/_models/review';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  @Output() sendNewReview = new EventEmitter();
  newReview: Review = new Review();
  optradio;
  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService
  ) {}

  ngOnInit() {}

  addReview(form) {
    const type = form.value.type;
    const albumId = this.route.snapshot.paramMap.get('id');

    this.newReview.albumId = Number(albumId);
    this.newReview.postDate = new Date(Date.now());
    if (type === 'online') {
      this.reviewService
        .addReviewToServer(this.newReview)
        .then(res => {
          this.sendNewReview.emit(res.data);
          form.reset();
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.reviewService.addReviewToLocal(albumId, this.newReview);
      // Create copy to object because Angular send empty object to parent
      this.sendNewReview.emit({ ...this.newReview });
      form.reset();
    }
  }
}
