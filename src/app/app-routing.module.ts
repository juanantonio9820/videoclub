import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'autor',
    loadChildren: () => import('./autor/autor.module').then( m => m.AutorPageModule)
  },
  {
    path: 'autor',
    loadChildren: () => import('./pages/autor/autor.module').then( m => m.AutorPageModule)
  },
  {
    path: 'curriculum',
    loadChildren: () => import('./pages/curriculum/curriculum.module').then( m => m.CurriculumPageModule)
  },
  {
    path: 'videoclub',
    loadChildren: () => import('./pages/videoclub/videoclub.module').then( m => m.VideoclubPageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./pages/detalle/detalle.module').then( m => m.DetallePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
