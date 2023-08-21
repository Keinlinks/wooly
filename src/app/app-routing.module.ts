import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authLoginGuard } from './Auth/auth-login.guard';
import { ChatPageModule } from './Pages/chat-page/chat-page.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'chat',
    loadChildren: () =>
      import('./Pages/chat-page/chat-page.module').then(
        (m) => m.ChatPageModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./Pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
