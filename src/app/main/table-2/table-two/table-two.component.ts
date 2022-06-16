import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/service/api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-table-two',
  templateUrl: './table-two.component.html',
  styleUrls: ['./table-two.component.css']
})
export class TableTwoComponent implements OnInit {
  heading = 'Table Data Two';
  subscriptions: Subscription[] = [];
  data: any[] = []

  neededArray:any[] = [
    
  ];

  Object:any
  obj: any;

  constructor(
    private apiService: ApiService
  ) {}


  ngOnInit(): void {
    this.getdataTwo();
  }

  getdataTwo(){
    this.subscriptions.push(
      this.apiService.getApiDataTwo().subscribe((res:any)=>{
        this.data=res.summary;
      })
    )
  }

  keys() : Array<string> {
    return Object.keys(this.data);
  }

  Download() {
   this.downloadFile(this.data, 'jsontocsv');
  }

  downloadFile(data:any, filename='data') {
    let csvData = this.ConvertToCSV(data, ['district','active', 'confirmed', 'deceased', 'home_obs' ,'hospital_obs' , 'hospital_today' ,'recovered' ,'total_obs']);
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  
        dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", filename + ".csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
}

ConvertToCSV(objArray:any, headerList:any)  {
  
     let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
     
     let str = '';
     let row = 'S.No,';

     for (let index in headerList) {
         row += headerList[index] + ',';
     }
     row = row.slice(0, -1);
     str += row + '\r\n';



     let spaghettiProperties :any = Object.keys(this.data);
     let i = 0;
     for (let prop of spaghettiProperties ) { 
         this.neededArray.push(this.data[prop]);
         this.neededArray[i]['district'] = prop;
         i++;
     }

    //  const neededArray = _.clone(this.neededArray);
     this.neededArray.push({
       district: 'total',
       active: _.sumBy(this.neededArray, 'active'),
       confirmed: _.sumBy(this.neededArray, 'confirmed'),
       deceased: _.sumBy(this.neededArray, 'deceased'),
       home_obs: _.sumBy(this.neededArray, 'home_obs'),
       hospital_obs: _.sumBy(this.neededArray, 'hospital_obs'),
       hospital_today: _.sumBy(this.neededArray, 'hospital_today'),
       recovered: _.sumBy(this.neededArray, 'recovered'),
       total_obs: _.sumBy(this.neededArray, 'total_obs'),
     });
     

     for (let i = 0; i < this.neededArray.length; i++) {
         let line = (i+1)+'';
         for (let index in headerList) {
            let head = headerList[index];

             line += ',' + this.neededArray[i][head];
         }
         str += line + '\r\n';
     }
     
     return str;
 }


}
