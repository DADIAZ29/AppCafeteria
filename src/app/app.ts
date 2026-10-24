import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  template: `
    <app-navbar></app-navbar>
    <div class="container mt-4">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cafeteria-app');
}