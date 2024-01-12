import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputValidation]'
})
export class InputValidationDirective {
  @Input('appInputValidation') validationType: string;

  constructor(private el: ElementRef) {}

  @HostListener('input') onInput() {
    const inputValue = this.el.nativeElement.value;
    const isValid = this.validateInput(inputValue);
    this.setValidationStyles(isValid);
  }

  private validateInput(value: string): boolean {

    if (!value.trim()) {
        return false;
    }
    
    if (this.validationType === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    }

    return true; 
  }

  private setValidationStyles(isValid: boolean): void {
    if (isValid) {
      this.el.nativeElement.classList.remove('invalid-input');
      this.el.nativeElement.classList.add('valid-input');
    } else {
      this.el.nativeElement.classList.remove('valid-input');
      this.el.nativeElement.classList.add('invalid-input');
    }
  }
}