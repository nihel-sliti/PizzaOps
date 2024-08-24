import { Component } from '@angular/core';
import { BalanceOverviewComponent } from './balance-overview/balance-overview.component';
import { StatsComponent } from './stats/stats.component';
import { CategoryListComponent } from "./category-list/category-list.component";

@Component({
    selector: 'app-crm',
    standalone: true,
    templateUrl: './crm.component.html',
    styleUrl: './crm.component.scss',
    imports: [StatsComponent, BalanceOverviewComponent, CategoryListComponent]
})
export class CrmComponent {}