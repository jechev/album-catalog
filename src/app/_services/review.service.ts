import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable()
export class ReviewService {
  private baseUrl = 'http://localhost:3000/reviews';

  constructor() {}

  public addReviewToServer(review) {
    return axios.post(this.baseUrl, review);
  }

  public addReviewToLocal(id, review) {
    const currentReviews = JSON.parse(localStorage.getItem(id)) || [];

    currentReviews.push(review);

    console.log(JSON.stringify(currentReviews));
    localStorage.setItem(id, JSON.stringify(currentReviews));
  }

  public getLocalReviews(id) {
    return JSON.parse(localStorage.getItem(id)) || [];
  }
}
