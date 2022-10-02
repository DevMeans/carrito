import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestCarritoComponent } from './test-carrito/test-carrito.component';

const routes: Routes = [
  { path: 'carrito', component: TestCarritoComponent },
  { path: '', pathMatch: 'full', redirectTo: '/carrito' },
  { path: '**', component: TestCarritoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
