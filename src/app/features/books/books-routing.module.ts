import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {BookAddComponent} from "./book-add/book-add.component";
import {AuthGuard} from "../../guards/auth.guard";

const routes: Routes = [
  {path: 'list', component: BookListComponent},
  {path: 'details/:id', component: BookDetailsComponent},
  {path: 'add', component: BookAddComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
}
