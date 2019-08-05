import { Component, OnInit, Input } from '@angular/core';
import { ShowStudent } from '../../models/showStudent';
import { ProgressService } from '../../services/progress.service';

@Component({
  selector: 'app-progress-table',
  templateUrl: './progress-table.component.html',
  styleUrls: ['./progress-table.component.scss']
})
export class ProgressTableComponent implements OnInit {
@Input() student: ShowStudent;

  public arr: Array<number> = [];
  public monthArr = ['Sep', 'Oct', 'Nov', 'Des', 'Feb', 'Mar', 'Apr', 'May'];

  private readonly PAY = 50;
  constructor(private progressService: ProgressService) { }

  ngOnInit() {
    this.arr = this.progressService.progressBar(this.student);
  }

}
