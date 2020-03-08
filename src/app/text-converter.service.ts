import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextConverterService {
  resultStr = '';
  constructor() { }

  convertToText(numberInput) {
    this.resultStr = '';
    numberInput.split('#').forEach(indvNumber => {
      this.resultStr += indvNumber ? String.fromCharCode((indvNumber % 26) + 65) : '';
    });
    return this.resultStr;
  }
}
