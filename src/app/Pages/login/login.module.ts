import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',

    children: [
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];
@NgModule({
  declarations: [LoginPageComponent, RegisterComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [],
})
export class LoginModule {}
