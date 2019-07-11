import { Component, OnInit } from '@angular/core';
import { MultiFormService } from 'src/app/services/multi-form.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private service: MultiFormService) { }

  ngOnInit() {
    this.service.complete();
  }

  reset(): void{
    this.service.reset();
  }

}
