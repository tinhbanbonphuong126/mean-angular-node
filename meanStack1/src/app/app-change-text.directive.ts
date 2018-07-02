import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[appAppChangeText]'
})
export class AppChangeTextDirective {

    constructor(Element: ElementRef) {
        console.log(Element.nativeElement.innerText);
        // Element.nativeElement.innerText = 'Freetuts '
    }

}
