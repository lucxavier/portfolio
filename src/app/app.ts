import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
  menuItems = [
    { name: 'Home', route: '/' },
    { name: 'Projects', route: '/projects' }, // Placeholder
    { name: 'Contacts', route: '/contacts' },
  ];
}
