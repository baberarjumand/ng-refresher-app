import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageAComponent } from './pages/page-a/page-a.component';
import { PageBComponent } from './pages/page-b/page-b.component';

export const routes: Routes = [
  {
    path: 'page-a',
    component: PageAComponent,
  },
  {
    path: 'page-b',
    component: PageBComponent,
  },
  {
    path: 'home',
    component: HomeComponent,    
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
