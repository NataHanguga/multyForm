import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multi-form',
  templateUrl: './multi-form.component.html',
  styleUrls: ['./multi-form.component.scss']
})
export class MultiFormComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.router.navigateByUrl('/');
  }
}
