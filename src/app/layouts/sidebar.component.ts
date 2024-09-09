import { Component } from "@angular/core";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  template: `
    <aside id="sidebar" class="bg-gray-900 text-gray-200 w-64 h-full py-6 px-4 overflow-auto">
      <nav class="space-y-4">
        <a href="dashboard" class="flex items-center py-2 px-4 rounded hover:bg-gray-700">
          <i class="hgi-stroke hgi-dashboard-speed-01 mr-3"></i> Dashboard
        </a>
        <a href="my-tasks" class="flex items-center py-2 px-4 rounded hover:bg-gray-700">
          <i class="hgi-stroke hgi-task-01 mr-3"></i> My Tasks
        </a>
        <a href="reports" class="flex items-center py-2 px-4 rounded hover:bg-gray-700">
          <i class="hgi-stroke hgi-analytics-01 mr-3"></i> Reports
        </a>
        <a href="settings" class="flex items-center py-2 px-4 rounded hover:bg-gray-700">
          <i class="hgi-stroke hgi-settings-01 mr-3"></i> Settings
        </a>
      </nav>
    </aside>
    `,
})
export class SidebarComponent { }