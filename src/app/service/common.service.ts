import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public domin: any = 'http://a.itying.com/api/'
  constructor(public http: HttpClient) { }
  get(api: any) {
    return new Observable(observable => {
      this.http.get(this.domin + api)
        .subscribe(value => {
          observable.next(value)
        })


    })
  }

}
