import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable()
export class ReviewService {
  private baseUrl = 'http://localhost:3000/reviews';

  constructor() {}

  public addReview(review) {
    return axios.post(this.baseUrl, review);
  }
}
