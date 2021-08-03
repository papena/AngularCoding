import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app.home.component';
import { LoginComponent } from './app.login.component';

const routes: Routes = [
  { path:'home',component: HomeComponent},
  { path:'login',component: LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
