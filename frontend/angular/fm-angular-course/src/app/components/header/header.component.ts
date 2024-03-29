import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  showAddTask = false;
  subscribtion: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscribtion = this.uiService.onToggle()
      .subscribe(formToggled => {
        this.showAddTask = formToggled;
      });
  }

  toggleAddTask(): void {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }
}
