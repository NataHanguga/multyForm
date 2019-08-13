import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShowStudent } from '../../models/showStudent';
import { ProgressService } from '../../services/progress.service';

@Component({
  selector: 'app-progress-table',
  templateUrl: './progress-table.component.html',
  styleUrls: ['./progress-table.component.scss']
})
export class ProgressTableComponent implements OnInit {
@Input() student: ShowStudent;
@Output() array: EventEmitter<Array<number>> = new EventEmitter<Array<number>>();
  public arr: Array<number> = [];
  constructor(private progressService: ProgressService) { }

  ngOnInit() {
    this.arr = this.progressService.progressBar(this.student);
    this.array.emit(this.arr);
  }

}
