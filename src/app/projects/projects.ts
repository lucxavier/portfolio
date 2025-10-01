
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';

interface Project {
  name: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
  standalone: true,
  imports: [MatIconModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProjectsComponent {
  projects = signal<Project[]>([
    { name: 'Project 1', image: 'assets/angular.png' },
    { name: 'Project 2', image: 'assets/css.png' },
    { name: 'Project 3', image: 'assets/html.png' },
    { name: 'Project 4', image: 'assets/javascript.png' },
    { name: 'Project 5', image: 'assets/tailwind.png' },
    { name: 'Project 6', image: 'assets/typescript.png' },
  ]);
}
