import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'books', loadChildren: () => import('./features/books/books.module').then(m => m.BooksModule)},
    {path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)},
    // ici pour l'exemple, nous n'avons pas de partie admin
    {path: 'admin', canActivateChild: [AuthGuard], children:[]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
