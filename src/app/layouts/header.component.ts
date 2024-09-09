import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="bg-gray-800 text-white flex items-center justify-between px-6 py-4 shadow-md">
      <!-- Logo & Title -->
      <div class="flex items-center">
        <span class="ml-3 text-xl font-bold">Task Tracker</span>
      </div>
      <!-- Navigation -->
      <!--<nav class="space-x-4">
        <a href="#" class="hover:text-gray-300">Home</a>
        <a href="#" class="hover:text-gray-300">Projects</a>
        <a href="#" class="hover:text-gray-300">Tasks</a>
      </nav>-->
      <!-- User Profile -->
      <div class="flex items-center">
        <span class="mr-4">Hello, John</span>
        <img src="assets/profile.jpg" alt="User" class="h-8 w-8 rounded-full">
      </div>
    </header>
    `
})
export class HeaderComponent { }