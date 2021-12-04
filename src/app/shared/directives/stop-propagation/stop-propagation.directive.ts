import {Directive, HostListener} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[stopPropagation]'
})
export class StopPropagationDirective {

  @HostListener('click', ['$event']) handleClick(event: Event): void {
    event.stopPropagation();
  }

}
