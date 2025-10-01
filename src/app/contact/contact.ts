import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
  contactItems = [
    {
      icon: 'email',
      label: 'E-mail',
      href: 'mailto:lucas.h.xavier@gmail.com',
      value: 'lucas.h.xavier@gmail.com'
    },
    {
      icon: 'phone',
      label: 'Telefone',
      href: 'https://wa.me/5543999585616',
      value: '+55 43 99958-5616'
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      href: '#', // Placeholder
      value: 'LinkedIn Profile'
    },
    {
      icon: 'github',
      label: 'GitHub',
      href: '#', // Placeholder
      value: 'GitHub Profile'
    }
  ];
}
