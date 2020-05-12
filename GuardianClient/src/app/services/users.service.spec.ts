import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UsersService } from './users.service';
import User from '../models/user'

describe('UsersService', () => {
  let service: UsersService;
  let user: User;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ HttpClient, HttpHandler ]
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should create users', () => {
    service.createUser(user);
    expect(service).toBeTruthy();
  });
});
