import { Component, HostListener } from '@angular/core';
import { AnnualProfitComponent } from "../stats/annual-profit/annual-profit.component";
import { TotalGrowthComponent } from "../stats/total-growth/total-growth.component";
import { DailyAverageIncomeComponent } from "../stats/daily-average-income/daily-average-income.component";
import { LeadConversationsComponent } from "../stats/lead-conversations/lead-conversations.component";
import { TotalOrdersComponent } from "../stats/total-orders/total-orders.component";

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [AnnualProfitComponent, TotalGrowthComponent, DailyAverageIncomeComponent, LeadConversationsComponent, TotalOrdersComponent],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent {
  title = 'your-app-name';

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    const target = (event.target as HTMLElement).getAttribute('data-target');
    if (target) {
      event.preventDefault();
      const element = document.getElementById(target);
      if (element) {
        const yOffset = -100; // Adjust this value according to your needs
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }
}
