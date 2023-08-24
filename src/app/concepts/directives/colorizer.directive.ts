import { Directive, ElementRef, Renderer2 } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]', // attribute selector
})
export class ColorizerDirective {
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {
    console.log('Inside ColorizerDirective Constructor');
    // 1. find out the element in which this directive is used
    // using ElementRef class
    console.log(this.elRef.nativeElement);
    const divEl = this.elRef.nativeElement;

    // 2. change the style
    // divEl.style.backgroundColor = 'red';
    // divEl.style.height = '200px';
    // divEl.style.color = '#fff';
    this.renderer.setStyle(divEl, 'background-color', 'red');
    this.renderer.setStyle(divEl, 'height', '200px');
    this.renderer.setStyle(divEl, 'color', '#fff');
  }

  // Learn about @HostListener()
  // Learn about @HostBinding()
}
