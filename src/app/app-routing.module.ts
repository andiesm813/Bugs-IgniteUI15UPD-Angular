import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { MovieAppComponent } from './movie-app/movie-app.component';
import { TestingComponentsComponent } from './testing-components/testing-components.component';
import { ImgResizingComponent } from './img-resizing/img-resizing.component';

export const routes: Routes = [
  { path: '', redirectTo: 'movie-app', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'movie-app', component: MovieAppComponent, data: { text: 'Movie-App' } },
  { path: 'testing-components', component: TestingComponentsComponent, data: { text: 'Testing-Components' } },
  { path: 'img-resizing', component: ImgResizingComponent, data: { text: 'Img-Resizing' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
