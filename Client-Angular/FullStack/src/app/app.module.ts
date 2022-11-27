import { NewTaskComponent } from './new-task/new-task.component';
import { UserTodosandPostsComponent } from './user-todosand-posts/user-todosand-posts.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { NewPostComponent } from './new-post/new-post.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { BlankCompComponent } from './blank-comp/blank-comp.component';

const appRoutes: Routes = [
  { path: 'todosAndPosts/:id', component: UserTodosandPostsComponent },
  { path: 'addPer', component: AddPersonComponent },
  { path: '', component: BlankCompComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UsersComponent,
    UserTodosandPostsComponent,
    PostsComponent,
    TodosComponent,
    NewTaskComponent,
    NewPostComponent,
    AddPersonComponent,
    BlankCompComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
