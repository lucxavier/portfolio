import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ContactComponent } from './contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'contacts',
    component: ContactComponent,
  },
];
