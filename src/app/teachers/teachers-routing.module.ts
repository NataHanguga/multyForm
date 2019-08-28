import { ShowTeachersComponent } from './components/show-teachers/show-teachers.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
   {path: '', component: ShowTeachersComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeachersRoutingModule {}
