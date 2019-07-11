import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.scss']
})
export class ShowStudentsComponent implements OnInit {
  public studentList: Student[];
  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentList = this.studentService.getStudentsFromLocalSrotage();
    console.log(this.studentList);
    this.studentService.refractData();
  }

  payNow(id: number) {
    console.log(id);
    const payedStudent = this.studentList.find(
      (student: Student) => {
        return student.id === id;
      }
    );
    console.log(payedStudent);
  }
}
