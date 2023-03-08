import { Component, OnInit } from '@angular/core';
import { FinancialService } from '../services/financial.service';

@Component({
  selector: 'app-testing-components',
  templateUrl: './testing-components.component.html',
  styleUrls: ['./testing-components.component.scss']
})
export class TestingComponentsComponent implements OnInit {
  public date: any;
  public date1 = new Date('2023-03-16T00:00');
  public financialBoxOfficeRevenue: any = null;

  constructor(
    private financialService: FinancialService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.financialService.getData('BoxOfficeRevenue').subscribe(data => this.financialBoxOfficeRevenue = data);
  }
}
