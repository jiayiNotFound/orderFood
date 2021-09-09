import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  api: string = 'productcontent/?id='
  id: string = ''
  menuDetail:any=''


  constructor(public store: CommonService, public route: ActivatedRoute) {
    this.route.params.subscribe(value => {
      this.id = value.id
      // console.log(this.id)
    })
    this.store.get(this.api + this.id).subscribe(res => {

      let menuList:any=res
      this.menuDetail= menuList.result[0]
      // console.log(this.menuDetail)
    })

  }

  ngOnInit(): void {
  }

}
