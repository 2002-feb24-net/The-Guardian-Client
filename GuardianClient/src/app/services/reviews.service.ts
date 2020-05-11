import { Injectable } from '@angular/core';
import Review from '../models/review';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private baseUrl = environment.guardianApiBaseUrl;
  constructor(private http: HttpClient) { }
  CreateReviews(newReview: Review)
  {
    return this.http.post<Review>(`${this.baseUrl}/api/Reviews`, newReview)
      .toPromise();
  }
}
