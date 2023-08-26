import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authLoginGuard } from './Auth/auth-login.guard';
import { ChatPageModule } from './Pages/chat-page/chat-page.module';
import { redirectsGuard } from './guards/redirects.guard';

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
    canActivate: [authLoginGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./Pages/login/login.module').then((m) => m.LoginModule),
    canActivate: [redirectsGuard],
  },

  {
    path: '**',
    redirectTo: '/chat',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
