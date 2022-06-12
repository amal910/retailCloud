import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  subscriptions: Subscription[] = [];
  data:any []=[]

  heading = 'Table Data';
  
  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.getdata();
  }


  getdata(){
    this.subscriptions.push(
      this.apiService.getApiData().subscribe((res:any)=>{
        this.data=res;
      })
    )
  }

  Download(){
    this.apiService.downloadFile(this.data, 'jsontocsv');
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
