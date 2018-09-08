import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posting } from './posting.model';

@Injectable({
  providedIn: 'root'
})
export class PostingDataService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<Posting[]> {
    return this.http.get<Posting[]>('/api/jobs');
  }

}
