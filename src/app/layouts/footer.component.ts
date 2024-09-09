import { Component } from "@angular/core";

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gray-800 text-gray-200 py-4">
      <div class="container mx-auto text-center">
        <p>&copy; 2024 Task Tracker. All Rights Reserved.</p>
        <p>
          <a href="#" class="hover:underline">Privacy Policy</a> | 
          <a href="#" class="hover:underline">Terms of Service</a>
        </p>
      </div>
    </footer>
    `
})
export class FooterComponent { }