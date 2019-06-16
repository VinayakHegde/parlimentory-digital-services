import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../../interfaces/config';
import { Observable } from 'rxjs';

@Injectable()
export class MemberDetailsService {
  private url : string;

  constructor(private http : HttpClient) {
    this.setUrl();
  }

  getMember(ids : number[]){
    return Observable.forkJoin(ids.map((id) => this.http.get(this.url.concat(id.toString()))))
  }

  private setUrl(){
    this.http.get<Config>('assets/config.json').subscribe(res => {
      this.url = res.membersUrl;
    });
  }
}
