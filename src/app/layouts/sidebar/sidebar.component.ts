import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: 'sidebar.component.html',
  imports: [CommonModule]
})
export class SidebarComponent {
  items = [
    { title: 'Dashboard', icon: 'hgi-settings-01', href: 'dashboard' },
    { title: 'My Tasks', icon: 'hgi-task-01', href: 'my-tasks' },
    { title: 'Reports', icon: 'hgi-analytics-01', href: 'reports' },
    {
      title: 'Settings', icon: 'hgi-settings-01', isExpanded: false, children: [
        { title: 'Profile', href: 'settings/profile' }
      ]
    }
  ];
}