import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[currentMonth]'
})
export class CurrentMonthDirective implements OnInit {
    constructor(private el: ElementRef) {  }

    ngOnInit() {
        this.el.nativeElement.style.border = '1px solid red';
    }
 }
