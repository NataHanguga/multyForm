import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'student',
    loadChildren: './student/student.module#StudentModule'
  },
  {
    path: 'teachers',
    loadChildren: './teachers/teachers.module#TeachersModule'
  },
  {
    path: 'setting',
    loadChildren: './setting/setting.module#SettingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
