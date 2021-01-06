import { Routes } from '@angular/router';
import { AuthComponent } from './navegacao/auth/auth.component';
import { PhotosComponent } from './photos/photos.component';
import { UsersComponent } from './users/users.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full'},
    { path: 'auth', component: AuthComponent },
    { path: 'users', component: UsersComponent },
    { path: 'photos', component: PhotosComponent }
];