import { Component, OnInit } from '@angular/core';
import { TextConverterService } from '../text-converter.service';

@Component({
  selector: 'app-number-to-string-converter',
  templateUrl: './number-to-string-converter.component.html',
  styleUrls: ['./number-to-string-converter.component.scss']
})
export class NumberToStringConverterComponent implements OnInit {
  btnLabelArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, '#', 0, '<-'];
  numberInput = '';
  textDisplay = '';
  constructor(private textConverterService: TextConverterService) { }

  ngOnInit() {
  }

  onBtnClick(value) {
    if (value === '<-') {
      this.numberInput = this.numberInput.substr(0, this.numberInput.length - 1);
    } else {
      this.numberInput += value;
    }
    this.textDisplay = this.textConverterService.convertToText(this.numberInput);
  }
}
