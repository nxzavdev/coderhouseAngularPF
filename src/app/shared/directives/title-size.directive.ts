import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitleSize]',
})
export class TitleSizeDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.fontSize = '20px';
    this.elementRef.nativeElement.style.fontWeight = '500';
    this.elementRef.nativeElement.style.marginBottom = '2rem';
  }
}
