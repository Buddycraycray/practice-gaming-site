import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment'; //creates it as shorthand, if throws error then just retype it
import { APIResponse, Game } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService { //this code sets up the HTTP service to call API backend;b

  constructor(private http: HttpClient) { } //constructor injects service from httpclient class to communicate with backend

  getGameList( //method
    ordering: string,
    search?: string
  ): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', ordering);

    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search); //passing objects
    }

    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params: params,
    }); //access url link into the environment file in the proj (look at the folder)
  }
}
