import { Component } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { FooterComponent } from "./footer.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-single-layout',
  standalone: true,
  template: `
      <div class="flex flex-col h-screen">
      <!-- Header -->
        <app-header></app-header>

        <div class="flex flex-1">
          
        <!-- Main content -->
        <main class="flex-1 p-6 bg-gray-100">
          <router-outlet />
        </main>

      </div>

      <!-- Footer -->
      <app-footer></app-footer>
    </div>
    `,
  styleUrls: ['../../styles.css'],
  imports: [FooterComponent, HeaderComponent, RouterOutlet]
})
export class SingleLayoutComponent { }