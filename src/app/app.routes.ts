import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { UsersComponent } from './users/users.component';


export const ROUTES : Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'about', component: AboutComponent },
    { path: 'users', component: UsersComponent },  
    { path: '**', component: NotFoundComponent }
]