import { Component, OnInit, signal, WritableSignal, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements OnInit {

  skills = [
    { name: 'HTML', icon: 'assets/html.png' },
    { name: 'CSS', icon: 'assets/css.png' },
    { name: 'JavaScript', icon: 'assets/javascript.png' },
    { name: 'TypeScript', icon: 'assets/typescript.png' },
    { name: 'Angular', icon: 'assets/angular.png' },
    { name: 'Tailwind', icon: 'assets/tailwind.png' },
  ];

  skillsTrack: { name: string; icon: string }[];

  constructor() {
    this.skillsTrack = [...this.skills, ...this.skills];
  }

  // Typing effect properties
  line1 = signal('');
  line2 = signal('');
  line3 = signal('');
  private fullLine1 = 'Olá,';
  private fullLine2 = 'eu sou o Lucas';
  private fullLine3 = 'Desenvolvedor Front-End';

  ngOnInit() {
    this.typeWriter();
  }

  private typeWriter() {
    this.typeOn(this.fullLine1, this.line1, () => {
      this.typeOn(this.fullLine2, this.line2, () => {
        this.typeOn(this.fullLine3, this.line3);
      });
    });
  }

  private typeOn(fullText: string, signal: WritableSignal<string>, onComplete?: () => void) {
    let i = 0;
    const interval = setInterval(() => {
      signal.set(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
        if (onComplete) {
          onComplete();
        }
      }
    }, 100);
  }
}
