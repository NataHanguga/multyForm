import { Pipe, PipeTransform } from '@angular/core';
import { Teacher } from '../models/teacher';
import { ShowStudent } from '../models/showStudent';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Teacher[], search: string) {
    if (!items) { return []; }
    if (!search || !search.length) { return items; }

    search = search.toLocaleLowerCase();

    const data = items.forEach((teacher: Teacher) => {
      return teacher.student.filter((student: ShowStudent) =>  {
        return student.fullName.toLocaleLowerCase().includes(search);
      });
    });
    console.log(data);
    return data;
  }
  // return this.teacherList.map((teacher: Teacher) => {
  //   return new Teacher(teacher.teacherName, teacher.student.filter((student: ShowStudent) => {
  //     return student.fullName.toLocaleLowerCase().includes(data);
  //     // item.title.indexOf(this.state.search) !== -1
  //   }));
  // });

}
