import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../service/common.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public api ="productlist"
  public menu:any=''
  domin:string=''

  constructor(public store:CommonService) {
    this.domin = this.store.domin
  }

  ngOnInit(): void {
    this.store.get(this.api)
    .subscribe(value=>{
      this.menu=value
      // console.log(this.menu)

    })


  }

}
