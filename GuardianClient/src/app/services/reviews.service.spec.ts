import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse, HttpClient, HttpHandler } from '@angular/common/http';
import { ReviewsService } from './reviews.service';

describe('ReviewsService', () => {
  let service: ReviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient,HttpHandler]
    });
    service = TestBed.inject(ReviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should create reviews', () => {
    service.CreateReviews(null);
    expect(service).toBeTruthy();
  });
});
