import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { EditdataComponent } from './editdata/editdata.component';

const routes: Routes = [
  {path:"",redirectTo:'/Todoapp',pathMatch:'full'},
  { path:"Todoapp",component: TodoComponent},
  { path:"edittodoapp/:id",component: EditdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



  
export class AppRoutingModule { }
export const routingcomponents = [
TodoComponent,
EditdataComponent
]