import { Routes } from '@angular/router'
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './not-found/not-found.component'

export const ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: NotFoundComponent},
]
