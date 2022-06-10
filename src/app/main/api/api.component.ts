import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  subscriptions: Subscription[] = [];
  data:any []=[]

  heading = 'Api Data';
  
  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.getdata();
  }


  getdata(){
    this.subscriptions.push(
      this.apiService.getApiData().subscribe((res:any)=>{
        console.log(res);
        this.data=res;
      })
    )
  }

}
