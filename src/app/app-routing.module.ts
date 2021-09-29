import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ProvinciasModule } from './pages/provincias/provincias.module';

const routes:Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path:'posts',
    loadChildren: ()=> import('./pages/posts/posts.module')
      .then( m => m.PostsModule)
  },
  {
    path:'provincias',
    loadChildren: ()=> import('./pages/provincias/provincias.module')
      .then( m => m.ProvinciasModule)
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
