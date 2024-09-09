import { Routes } from '@angular/router';
import { SingleLayoutComponent } from './layouts/single-layout.component';
import { SidebarLayoutComponent } from './layouts/sidebar-layout.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: '',
        component: SidebarLayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
            },
            {
                path: 'my-tasks',
                loadComponent: () => import('./features/my-tasks/my-tasks.component').then(m => m.MyTasksComponent)
            },
            {
                path: 'reports',
                loadComponent: () => import('./features/reports/reports.component').then(m => m.ReportsComponent)
            },
            {
                path: 'settings',
                loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent)
            }
        ]
    },
    {
        path: 'auth',
        component: SingleLayoutComponent,
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.routes)
    }
];
