import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  getBatches() {
    return this.http.get<any[]>(environment.getBatchUrl);
  }

  getAnswers() {
    return this.http.get<any[]>(environment.getAnswersUrl);
  }

  getWeeks() {
    return this.http.get<any[]>(environment.getWeeksUrl);
  }

  getBatchAllWeeks(batch) {
    return this.http.get<any[]>(environment.getBatchAllWeeks + batch);
  }

  getOneBatchOneWeek({ batch, week }) {
    return this.http.get<any>(environment.getOneBatchOneWeek + batch + '/' + week);
  }
  
  getAvgWeekBatch() {
    return this.http.get<any>(environment.getAvgWeekBatch);
  }

  constructor(private http: HttpClient) { }

}
