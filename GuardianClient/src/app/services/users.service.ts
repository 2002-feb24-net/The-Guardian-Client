import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import User from '../models/user';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = environment.guardianApiBaseUrl;

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/api/Users`, user)
    .pipe(
      tap(_ => console.log('UsersService: Created user')),
      catchError(this.handleError<User>('createUser'))
    );
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`UsersService: ${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
