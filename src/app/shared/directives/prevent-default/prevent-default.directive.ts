import {Directive, HostListener} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[preventDefault]'
})
export class PreventDefaultDirective {

  @HostListener('click', ['$event']) handleClick(event: Event): void {
    event.preventDefault();
  }

}
