import { Component } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { SidebarComponent } from "./sidebar.component";
import { FooterComponent } from "./footer.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-sidebar-layout',
  standalone: true,
  template: `
      <div class="flex flex-col h-screen">
        <!-- Header -->
        <app-header></app-header>

        <div class="flex flex-1 overflow-hidden">

          <!-- Sidebar -->
          <app-sidebar></app-sidebar>

          <!-- Main content -->
          <main class="flex-1 p-6 bg-gray-100 overflow-auto">
            <router-outlet />
          </main>

        </div>

      <!-- Footer -->
      <app-footer></app-footer>
    </div>
    `,
  styleUrls: ['../../styles.css'],
  imports: [SidebarComponent, HeaderComponent, FooterComponent, RouterOutlet, SidebarComponent]
})
export class SidebarLayoutComponent { }