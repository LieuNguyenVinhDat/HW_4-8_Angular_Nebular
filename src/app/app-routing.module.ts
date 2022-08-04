import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  {
    path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },  {
    path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },   {
    path: 'home/news', loadChildren: () => import('./pages/home/pages/news/news.module').then(m => m.NewsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
