import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  selectedHero?: any;

  subscriptions: Subscription[] = [];
  data: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getdata();
  }

  getdata() {
    this.subscriptions.push(
      this.apiService.getApiData().subscribe((res: any) => {
        this.data = res;
      })
    );
  }

  Download() {
    this.apiService.downloadFile(this.data, 'jsontocsv');
  }

  onSelect(item: any): void {
    window.scrollTo(0, 0);
    this.selectedHero = item;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
